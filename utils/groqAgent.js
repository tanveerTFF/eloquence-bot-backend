const axios = require('axios');

async function runGroqAgent(message, history = []) {

  const systemPrompt = `
You are EloquenceBot, a friendly assistant that responds based on the user's message.

Rules:
- You talk naturally and kindly, like a friendly AI assistant.
- You can answer general questions like "how are you", "what's the weather", or "who made you".
- If the user sends a greeting (even with misspellings like "helllo" or "helo"), reply with:
  "Hi there! 👋 I'm Eloquence, your quote buddy. What kind of quote would you like today? Try motivational, romantic, funny, epic, stoic, or gamery."
- If the user asks for a category, reply with:
  "I see you're in the mood for some funny/epic/etc. inspiration!"
- If the message is unclear or gibberish, say:
  "Hmm, I didn't quite catch that. Try saying something like 'Tell me something romantic' or 'I want a funny quote'."
- If the user says "another one", "more", or "again", use previous context to give a quote in the same category.
- If the user says "something different", offer other categories.
- Do NOT include quotes. The system will fetch quotes separately.
`;


  const input = message.toLowerCase().trim();

  // ✅ Step 0: Manual greeting shortcut
  const greetingKeywords = ['hi', 'hello', 'hey', 'helo', 'helllo', 'hii', 'hola', 'howdy'];
  const isGreeting = greetingKeywords.some(g => input.includes(g)) && input.length <= 12;

  if (isGreeting) {
    return {
      reply: "Hi there! 👋 I'm Eloquence, your quote buddy. How can I help you today?",
      route: null,
    };
  }

  // ✅ Step 1: Gibberish protection
  const tooShortOrWeird =
    input.length <= 3 ||
    /^[^a-zA-Z]*$/.test(input) ||
    /[bcdfghjklmnpqrstvwxyz]{5,}/i.test(input) ||
    /[aeiou]{4,}/i.test(input);

  if (tooShortOrWeird) {
    return {
      reply:
        "Hmm, that didn't sound like a mood. Try asking for something like 'Tell me a funny quote' or say hi!",
      route: null,
    };
  }

  try {
    // ✅ Step 2: Construct full chat with history
        const recentHistory = history.slice(-6);  // Limit to last 6 messages only
        const messages = [
        { role: 'system', content: systemPrompt },
        ...recentHistory.map(m => ({ role: m.role, content: m.content })),
        { role: 'user', content: message },
        ];


    const response = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        model: 'llama3-70b-8192',
        messages,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const reply = response.data.choices[0]?.message?.content?.trim();

        if (!reply || reply.length < 5) {
            return {
            reply: "Hmm, I didn’t quite catch that. Would you like to see a motivational, romantic, funny, or epic quote?",
            route: null
        };
        }

    const userInput = message.toLowerCase();
    const content = reply.toLowerCase();

    // ✅ Step 3: Smart category detection (user input + Groq reply fallback)
    let route = null;

    if (userInput.includes('epic') || content.includes('epic')) {
      route = '/quotes/epic';
    } else if (userInput.includes('stoic') || content.includes('stoic')) {
      route = '/quotes/stoic';
    } else if (
      userInput.includes('romantic') ||
      userInput.includes('love') ||
      content.includes('romantic')
    ) {
      route = '/quotes/romantic';
    } else if (
      userInput.includes('funny') ||
      userInput.includes('joke') ||
      userInput.includes('laugh') ||
      content.includes('funny')
    ) {
      route = '/quotes/funny';
    } else if (
      userInput.includes('gamery') ||
      userInput.includes('game') ||
      content.includes('gamery')
    ) {
      route = '/quotes/gamery';
    } else if (
      userInput.includes('motivational') ||
      userInput.includes('inspiration') ||
      userInput.includes('inspire') ||
      content.includes('motivational') ||
      content.includes('inspiration')
    ) {
      route = '/quotes/motivational';
    }

    // ✅ Step 4: Format response
    const replyMessage = route
      ? `I see you're in the mood for some **${route.split('/')[2]}** inspiration! Here's a quote for you:`
      : `${reply}\n\nWould you like a quote? I can show motivational, romantic, funny, epic, stoic, or gamery ones.`;

    return { reply: replyMessage, route };

  } catch (err) {
    console.error('Groq API Error:', err);
    return {
      reply: "Sorry, I had trouble understanding that. Want me to show you a quote to brighten the mood?",
      route: null,
    };
  }
}

module.exports = runGroqAgent;