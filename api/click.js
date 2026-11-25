// Click Shop API (Merchant) handler — VIP a'zolik uchun to'lov
// Hujjat: https://docs.click.uz/

import crypto from 'crypto';

const VIP_PRICE_SOM = 65000;

const CLICK_ERROR = { OK: 0, SIGN_FAILED: -1, ALREADY_PAID: -4, USER_NOT_FOUND: -5, TRANSACTION_NOT_FOUND: -6, BAD_AMOUNT: -2, ACTION_NOT_FOUND: -3 };

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

function checkSignature(body) {
  const {
    click_trans_id, service_id, orig_amount, amount, action,
    error, sign_time, merchant_trans_id, merchant_prepare_id, sign_string,
  } = body;
  const secret = process.env.CLICK_SECRET_KEY || '';
  let raw;
  if (String(action) === '0') {
    raw = `${click_trans_id}${service_id}${secret}${merchant_trans_id}${amount}${action}${sign_time}`;
  } else {
    raw = `${click_trans_id}${service_id}${secret}${merchant_trans_id}${merchant_prepare_id}${amount}${action}${sign_time}`;
  }
  const hash = crypto.createHash('md5').update(raw).digest('hex');
  return hash === sign_string;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = req.body || {};
  const { click_trans_id, merchant_trans_id, amount, action } = body;

  if (!checkSignature(body)) {
    return res.status(200).json({ click_trans_id, merchant_trans_id, error: CLICK_ERROR.SIGN_FAILED, error_note: "Sign noto'g'ri" });
  }

  try {
    // merchant_trans_id formati: "vip_<userId>"
    const userId = String(merchant_trans_id || '').replace(/^vip_/, '');
    if (!userId) {
      return res.status(200).json({ click_trans_id, merchant_trans_id, error: CLICK_ERROR.USER_NOT_FOUND, error_note: 'Foydalanuvchi topilmadi' });
    }

    if (String(action) === '0') { // Prepare
      if (Number(amount) !== VIP_PRICE_SOM) {
        return res.status(200).json({ click_trans_id, merchant_trans_id, error: CLICK_ERROR.BAD_AMOUNT, error_note: "Summa noto'g'ri" });
      }
      const existRes = await sbFetch(`click_transactions?click_trans_id=eq.${click_trans_id}&select=*`);
      const existing = await existRes.json();
      if (existing.length) {
        const tx = existing[0];
        return res.status(200).json({ click_trans_id, merchant_trans_id, merchant_prepare_id: tx.merchant_prepare_id, error: CLICK_ERROR.OK, error_note: 'OK' });
      }
      const insertRes = await sbFetch('click_transactions', {
        method: 'POST',
        body: JSON.stringify({ click_trans_id, merchant_trans_id, amount, status: 'prepared' }),
      });
      const inserted = await insertRes.json();
      const prepareId = inserted[0]?.merchant_prepare_id;
      return res.status(200).json({ click_trans_id, merchant_trans_id, merchant_prepare_id: prepareId, error: CLICK_ERROR.OK, error_note: 'OK' });
    }

    if (String(action) === '1') { // Complete
      const r = await sbFetch(`click_transactions?click_trans_id=eq.${click_trans_id}&select=*`);
      const rows = await r.json();
      if (!rows.length) {
        return res.status(200).json({ click_trans_id, merchant_trans_id, error: CLICK_ERROR.TRANSACTION_NOT_FOUND, error_note: 'Tranzaksiya topilmadi' });
      }
      const tx = rows[0];
      if (tx.status === 'paid') {
        return res.status(200).json({ click_trans_id, merchant_trans_id, merchant_confirm_id: tx.merchant_prepare_id, error: CLICK_ERROR.ALREADY_PAID, error_note: "Allaqachon to'langan" });
      }
      const merchantError = body.error;
      if (Number(merchantError) < 0) {
        await sbFetch(`click_transactions?click_trans_id=eq.${click_trans_id}`, { method: 'PATCH', body: JSON.stringify({ status: 'cancelled' }) });
        return res.status(200).json({ click_trans_id, merchant_trans_id, error: CLICK_ERROR.OK, error_note: 'Cancelled' });
      }
      await sbFetch(`click_transactions?click_trans_id=eq.${click_trans_id}`, { method: 'PATCH', body: JSON.stringify({ status: 'paid' }) });
      await sbFetch(`profiles?id=eq.${userId}`, { method: 'PATCH', body: JSON.stringify({ is_vip: true }) });
      return res.status(200).json({ click_trans_id, merchant_trans_id, merchant_confirm_id: tx.merchant_prepare_id, error: CLICK_ERROR.OK, error_note: 'OK' });
    }

    return res.status(200).json({ click_trans_id, merchant_trans_id, error: CLICK_ERROR.ACTION_NOT_FOUND, error_note: 'Action topilmadi' });
  } catch (e) {
    return res.status(200).json({ click_trans_id, merchant_trans_id, error: -8, error_note: 'Server xatosi: ' + e.message });
  }
}
