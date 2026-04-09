// api/chat.js — Vercel Serverless Function
// This keeps your Anthropic API key SECRET and safe on the server.
// The browser never sees your API key.

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Invalid request' });
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY, // Stored safely in Vercel env vars
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: `You are Chat Guy, a cool, friendly, and relatable AI companion for Gen Z. 
You're chill, upbeat, and talk naturally — not corporate or robotic. 
Chat about literally anything: pop culture, relationships, school, work, life, 
fun facts, creativity, mental health, money. 
Keep responses conversational, warm, and concise.`,
        messages: messages.slice(-20) // Keep last 20 messages to save costs
      })
    });

    const data = await response.json();

    if (data.error) {
      return res.status(500).json({ error: data.error.message });
    }

    const reply = data.content.map(b => b.text || '').join('');
    return res.status(200).json({ reply });

  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({ error: 'Something went wrong' });
  }
}
