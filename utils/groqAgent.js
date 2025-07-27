const axios = require('axios');

async function runGroqAgent(message) {
  // Define system prompt for Groq
  const systemPrompt = `You are EloquenceBot, a friendly assistant that recommends quote categories (motivational, romantic, funny, etc.) based on the user's message. 
  NEVER include quotes yourself. Only describe the mood and recommend a category route (e.g., /quotes/romantic). The actual quotes will be fetched from the database by the system.`;

  try {
    // Send message to Groq API
    const response = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        model: 'llama3-70b-8192',  // Use a suitable model here
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        temperature: 0.7
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const reply = response.data.choices[0].message.content;

    // Decide on the route based on Groq's response (detect the mood)
    let route = null;

    const content = reply.toLowerCase();
    if (content.includes('motivational') || content.includes('inspiration')) {
      route = '/quotes/motivational';
    } else if (content.includes('romantic') || content.includes('love')) {
      route = '/quotes/romantic';
    } else if (content.includes('gamery') || content.includes('nerdy')) {
      route = '/quotes/gamery';
    } else if (content.includes('funny') || content.includes('humor') || content.includes('laugh')) {
      route = '/quotes/funny';
    } else if (content.includes('epic') || content.includes('legendary')) {
      route = '/quotes/epic';
    } else if (content.includes('stoic')) {
      route = '/quotes/stoic';
    } else {
      route = '/quotes/motivational'; // Default route if no category matches
    }

    return { reply, route };

  } catch (err) {
    console.error('Groq API Error:', err);
    return { reply: "I couldn't understand the mood", route: '/quotes/motivational' };  // Fallback if Groq fails
  }
}

module.exports = runGroqAgent;
