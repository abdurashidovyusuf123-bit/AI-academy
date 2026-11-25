// Payme Merchant API (JSON-RPC) handler — VIP a'zolik uchun to'lov
// Hujjat: https://developer.help.paycom.uz/

const VIP_PRICE_TIYIN = 6500000; // 65 000 so'm = 6 500 000 tiyin

const PAYME_ERRORS = {
  TRANSACTION_NOT_FOUND: { code: -31003, message: { ru: 'Транзакция не найдена', en: 'Transaction not found', uz: 'Tranzaksiya topilmadi' } },
  INVALID_AMOUNT: { code: -31001, message: { ru: 'Неверная сумма', en: 'Invalid amount', uz: "Noto'g'ri summa" } },
  USER_NOT_FOUND: { code: -31050, message: { ru: 'Пользователь не найден', en: 'User not found', uz: 'Foydalanuvchi topilmadi' } },
  CANT_CANCEL: { code: -31007, message: { ru: 'Невозможно отменить', en: 'Cannot cancel', uz: "Bekor qilib bo'lmaydi" } },
  ALREADY_DONE: { code: -31008, message: { ru: 'Транзакция уже завершена', en: 'Transaction already completed', uz: 'Tranzaksiya allaqachon yakunlangan' } },
};

function rpcError(id, err) {
  return { jsonrpc: '2.0', id, error: { code: err.code, message: err.message } };
}
function rpcResult(id, result) {
  return { jsonrpc: '2.0', id, result };
}

async function sbFetch(path, options = {}) {
  const url = `${process.env.SUPABASE_URL}/rest/v1/${path}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      apikey: process.env.SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
      'Content-Type': 'application/json',
      Prefer: options.prefer || 'return=representation',
      ...(options.headers || {}),
    },
  });
  return res;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Basic auth tekshiruvi
  const auth = req.headers.authorization || '';
  const expected = 'Basic ' + Buffer.from('Paycom:' + (process.env.PAYME_MERCHANT_KEY || '')).toString('base64');
  if (!process.env.PAYME_MERCHANT_KEY || auth !== expected) {
    return res.status(200).json(rpcError(req.body?.id ?? null, { code: -32504, message: { ru: 'Недостаточно прав', en: 'Insufficient privileges', uz: "Huquq yetarli emas" } }));
  }

  const { method, params, id } = req.body || {};

  try {
    if (method === 'CheckPerformTransaction') {
      const { amount, account } = params;
      if (Number(amount) !== VIP_PRICE_TIYIN) {
        return res.status(200).json(rpcError(id, PAYME_ERRORS.INVALID_AMOUNT));
      }
      const userId = account?.user_id;
      if (!userId) return res.status(200).json(rpcError(id, PAYME_ERRORS.USER_NOT_FOUND));
      const r = await sbFetch(`profiles?id=eq.${userId}&select=id`);
      const rows = await r.json();
      if (!rows.length) return res.status(200).json(rpcError(id, PAYME_ERRORS.USER_NOT_FOUND));
      return res.status(200).json(rpcResult(id, { allow: true }));
    }

    if (method === 'CreateTransaction') {
      const { id: transId, time, amount, account } = params;
      if (Number(amount) !== VIP_PRICE_TIYIN) {
        return res.status(200).json(rpcError(id, PAYME_ERRORS.INVALID_AMOUNT));
      }
      // Avval mavjudligini tekshiramiz
      const existRes = await sbFetch(`payme_transactions?id=eq.${transId}&select=*`);
      const existing = await existRes.json();
      if (existing.length) {
        const tx = existing[0];
        return res.status(200).json(rpcResult(id, { create_time: tx.create_time, transaction: String(tx.id), state: tx.state }));
      }
      // Boshqa pending tranzaksiya shu user uchun bormi (cross-check ixtiyoriy)
      await sbFetch('payme_transactions', {
        method: 'POST',
        body: JSON.stringify({ id: transId, user_id: account.user_id, amount, state: 1, create_time: time }),
      });
      return res.status(200).json(rpcResult(id, { create_time: time, transaction: String(transId), state: 1 }));
    }

    if (method === 'PerformTransaction') {
      const { id: transId } = params;
      const r = await sbFetch(`payme_transactions?id=eq.${transId}&select=*`);
      const rows = await r.json();
      if (!rows.length) return res.status(200).json(rpcError(id, PAYME_ERRORS.TRANSACTION_NOT_FOUND));
      const tx = rows[0];
      if (tx.state === 2) {
        return res.status(200).json(rpcResult(id, { transaction: String(tx.id), perform_time: tx.perform_time, state: 2 }));
      }
      if (tx.state !== 1) return res.status(200).json(rpcError(id, PAYME_ERRORS.ALREADY_DONE));
      const performTime = Date.now();
      await sbFetch(`payme_transactions?id=eq.${transId}`, {
        method: 'PATCH',
        body: JSON.stringify({ state: 2, perform_time: performTime }),
      });
      await sbFetch(`profiles?id=eq.${tx.user_id}`, {
        method: 'PATCH',
        body: JSON.stringify({ is_vip: true }),
      });
      return res.status(200).json(rpcResult(id, { transaction: String(tx.id), perform_time: performTime, state: 2 }));
    }

    if (method === 'CancelTransaction') {
      const { id: transId, reason } = params;
      const r = await sbFetch(`payme_transactions?id=eq.${transId}&select=*`);
      const rows = await r.json();
      if (!rows.length) return res.status(200).json(rpcError(id, PAYME_ERRORS.TRANSACTION_NOT_FOUND));
      const tx = rows[0];
      const cancelTime = Date.now();
      const newState = tx.state === 2 ? -2 : -1;
      await sbFetch(`payme_transactions?id=eq.${transId}`, {
        method: 'PATCH',
        body: JSON.stringify({ state: newState, cancel_time: cancelTime, reason }),
      });
      if (tx.state === 2) {
        await sbFetch(`profiles?id=eq.${tx.user_id}`, {
          method: 'PATCH',
          body: JSON.stringify({ is_vip: false }),
        });
      }
      return res.status(200).json(rpcResult(id, { transaction: String(tx.id), cancel_time: cancelTime, state: newState }));
    }

    if (method === 'CheckTransaction') {
      const { id: transId } = params;
      const r = await sbFetch(`payme_transactions?id=eq.${transId}&select=*`);
      const rows = await r.json();
      if (!rows.length) return res.status(200).json(rpcError(id, PAYME_ERRORS.TRANSACTION_NOT_FOUND));
      const tx = rows[0];
      return res.status(200).json(rpcResult(id, {
        create_time: tx.create_time, perform_time: tx.perform_time || 0,
        cancel_time: tx.cancel_time || 0, transaction: String(tx.id), state: tx.state, reason: tx.reason || null,
      }));
    }

    if (method === 'GetStatement') {
      const { from, to } = params;
      const r = await sbFetch(`payme_transactions?create_time=gte.${from}&create_time=lte.${to}&select=*`);
      const rows = await r.json();
      return res.status(200).json(rpcResult(id, {
        transactions: rows.map(tx => ({
          id: tx.id, time: tx.create_time, amount: tx.amount,
          account: { user_id: tx.user_id }, create_time: tx.create_time,
          perform_time: tx.perform_time || 0, cancel_time: tx.cancel_time || 0,
          transaction: String(tx.id), state: tx.state, reason: tx.reason || null,
        })),
      }));
    }

    return res.status(200).json(rpcError(id, { code: -32601, message: { ru: 'Метод не найден', en: 'Method not found', uz: 'Metod topilmadi' } }));
  } catch (e) {
    return res.status(200).json(rpcError(req.body?.id ?? null, { code: -32400, message: { ru: 'Системная ошибка', en: 'System error', uz: 'Tizim xatosi: ' + e.message } }));
  }
}
