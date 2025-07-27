// utils/openaiAgent.js
const { OpenAI } = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const tools = [
  {
    type: 'function',
    function: {
      name: 'detectIntent',
      description: 'Detects the user\'s mood or intent from a message',
      parameters: {
        type: 'object',
        properties: {
          mood: {
            type: 'string',
            description: 'User mood or intent like motivational, romantic, funny, etc.',
          },
        },
        required: ['mood'],
      },
    },
  },
  {
    type: 'function',
    function: {
      name: 'navigateTo',
      description: 'Returns the correct quote page route based on mood',
      parameters: {
        type: 'object',
        properties: {
          route: {
            type: 'string',
            description: 'Page route, e.g. /quotes/motivational',
          },
        },
        required: ['route'],
      },
    },
  },
];

// Mocked tool handlers
const toolHandlers = {
  detectIntent: async (args) => {
    const text = args.mood?.toLowerCase() || '';

    // very basic logic for now
    if (text.includes('love') || text.includes('heart')) return { mood: 'romantic' };
    if (text.includes('funny') || text.includes('joke')) return { mood: 'funny' };
    return { mood: 'motivational' };
  },

  navigateTo: async (args) => {
    const mood = args.route || 'motivational';
    return { route: `/quotes/${mood}` };
  },
};

async function runAgent(message) {
  const messages = [
    { role: 'system', content: 'You are a helpful quote assistant chatbot.' },
    { role: 'user', content: message },
  ];

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages,
    tools,
    tool_choice: 'auto',
  });

  const toolCall = response.choices[0].message.tool_calls?.[0];

  if (toolCall) {
    const toolName = toolCall.function.name;
    const args = JSON.parse(toolCall.function.arguments);
    const result = await toolHandlers[toolName](args);

    // Let’s simulate follow-up response from bot
    const reply = `Got it! Redirecting you to our best ${result.mood || toolName} quotes.`;
    const route = result.route || `/quotes/${result.mood}`;

    return { reply, route };
  }

  // fallback response
  return {
    reply: response.choices[0].message.content,
    route: null,
  };
}

module.exports = runAgent;
