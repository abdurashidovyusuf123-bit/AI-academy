export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { user_id, email } = req.body || {};

  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_PRICE_ID) {
    return res.status(500).json({ error: 'Server sozlanmagan: Stripe kalitlari topilmadi.' });
  }
  if (!user_id || !email) {
    return res.status(400).json({ error: 'user_id va email kerak.' });
  }

  try {
    const params = new URLSearchParams({
      mode: 'subscription',
      'line_items[0][price]': process.env.STRIPE_PRICE_ID,
      'line_items[0][quantity]': '1',
      customer_email: email,
      success_url: `${req.headers.origin}/?vip=success`,
      cancel_url: `${req.headers.origin}/?vip=cancel`,
      'metadata[user_id]': user_id
    });

    const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: params
    });

    const session = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: session });
    }

    return res.status(200).json({ url: session.url });
  } catch (err) {
    return res.status(500).json({ error: 'Server xatoligi', details: String(err) });
  }
}
