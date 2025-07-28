//chat.js
const express = require('express');
const router = express.Router();
const runGroqAgent = require('../utils/groqAgent');
const Quote = require('../models/Quote');
const Message = require('../models/Message');
const Session = require('../models/Session');

router.post('/', async (req, res) => {
  try {
    const { message, sessionId } = req.body;
    if (!message || !sessionId) {
      return res.status(400).json({ error: 'Message and sessionId required' });
    }

    await Session.findOneAndUpdate(
      { sessionId },
      { lastUpdated: new Date() },
      { upsert: true, new: true }
    );

    await Message.create({ sessionId, role: 'user', content: message });

    const history = await Message.find({ sessionId }).sort({ timestamp: 1 });

        const formattedHistory = history.map(m => ({
        role: m.role === 'bot' ? 'assistant' : 'user',
        content: m.content
        }));


    const { reply: moodReply, route } = await runGroqAgent(message, formattedHistory);


    if (!route) {
    await Message.create({ sessionId, role: 'bot', content: moodReply });
    return res.json({ reply: moodReply, route: null });
    }


    const category = route.split('/').pop();
    const quote = await fetchQuoteFromMongo(category);
    const formattedQuote = quote || '⚠️ No quote found for this category.';
    const fullReply = `${moodReply}\n\nHere’s a **${category}** quote:\n${formattedQuote}`;

    await Message.create({ sessionId, role: 'bot', content: fullReply });

    res.json({ reply: fullReply, route });

  } catch (err) {
    console.error('🔥 Chat route error:', err);
    res.status(500).json({ error: 'Chat processing failed' });
  }
});


// Utility function to fetch quotes from MongoDB
async function fetchQuoteFromMongo(category) {
  const quotes = await Quote.aggregate([
    { $match: { category } },
    { $sample: { size: 1 } } // Randomly fetch one quote from the category
  ]);
  return quotes.length
    ? `**"${quotes[0].text}"** — ${quotes[0].author || 'Unknown'}`
    : null;
}


// GET chat history by session
router.get('/:sessionId', async (req, res) => {
  try {
    const { sessionId } = req.params;
    const messages = await Message.find({ sessionId }).sort({ timestamp: 1 }); // Sort by timestamp
    res.json(messages);
  } catch (err) {
    console.error('🔥 Error fetching messages:', err);
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});

module.exports = router;
