// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Routes
const chatRoutes = require('./routes/chat');
const quoteRoutes = require('./routes/quotes');

app.use('/api/chat', chatRoutes);   // Chatbot backend
app.use('/quotes', quoteRoutes);    // Quote category API for frontend pages

// Root check
app.get('/', (req, res) => {
  res.send('Eloquence backend running.');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
