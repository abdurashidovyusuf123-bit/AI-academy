export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { system, messages } = req.body || {};

  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({ error: 'Server sozlanmagan: GEMINI_API_KEY topilmadi.' });
  }

  try {
    // Bizning xabarlar formatini ({role, content}) Gemini formatiga o'giramiz
    const contents = (messages || []).map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }]
    }));

    const model = 'gemini-3.5-flash-lite';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: system || '' }] },
        contents
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data });
    }

    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text
      || 'Kechirasiz, javob olishda xatolik yuz berdi.';

    // Frontend kutayotgan formatga moslashtiramiz (o'zgartirish shart emas)
    return res.status(200).json({ content: [{ type: 'text', text }] });
  } catch (err) {
    return res.status(500).json({ error: 'Server xatoligi', details: String(err) });
  }
}
