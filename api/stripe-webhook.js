// Bu endpoint Stripe tomonidan chaqiriladi (foydalanuvchi emas).
// To'lov muvaffaqiyatli bo'lganda, foydalanuvchini Supabase'da VIP deb belgilaydi.
// MUHIM: bu yerda Supabase "service role" kaliti ishlatiladi — u faqat serverda,
// hech qachon frontendga chiqarilmaydi.

export const config = { api: { bodyParser: false } };

async function buffer(readable) {
  const chunks = [];
  for await (const chunk of readable) chunks.push(chunk);
  return Buffer.concat(chunks);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method not allowed');
  }

  const rawBody = await buffer(req);
  let event;

  try {
    // Oddiylik uchun imzo tekshiruvisiz JSON parse qilamiz.
    // Ishlab chiqarish (production) uchun Stripe imzosini tekshirish tavsiya etiladi.
    event = JSON.parse(rawBody.toString());
  } catch (err) {
    return res.status(400).send('Noto\'g\'ri so\'rov');
  }

  try {
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      const userId = session.metadata && session.metadata.user_id;

      if (userId) {
        await fetch(`${process.env.SUPABASE_URL}/rest/v1/profiles?user_id=eq.${userId}`, {
          method: 'PATCH',
          headers: {
            'apikey': process.env.SUPABASE_SERVICE_ROLE_KEY,
            'Authorization': `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
            'Content-Type': 'application/json',
            'Prefer': 'return=minimal'
          },
          body: JSON.stringify({
            is_vip: true,
            stripe_customer_id: session.customer
          })
        });
      }
    }

    // Obuna bekor qilinganda VIP holatini olib tashlash (ixtiyoriy, lekin tavsiya etiladi)
    if (event.type === 'customer.subscription.deleted') {
      const sub = event.data.object;
      await fetch(`${process.env.SUPABASE_URL}/rest/v1/profiles?stripe_customer_id=eq.${sub.customer}`, {
        method: 'PATCH',
        headers: {
          'apikey': process.env.SUPABASE_SERVICE_ROLE_KEY,
          'Authorization': `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({ is_vip: false })
      });
    }

    return res.status(200).json({ received: true });
  } catch (err) {
    return res.status(500).json({ error: String(err) });
  }
}
