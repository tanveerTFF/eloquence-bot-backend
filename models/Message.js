// models/Message.js
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  sessionId: { type: String, required: true },
  role: { type: String, enum: ['user', 'bot'], required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Message', messageSchema);
