const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Quote = require('../models/Quote');

dotenv.config({ path: '../.env' });
const MONGO_URI = process.env.MONGO_URI;

console.log('MONGO_URI:', MONGO_URI);

// ✅ Import all category quote files
const motivationalQuotes = require('./quotes/motivational');
const romanticQuotes = require('./quotes/romantic');
const funnyQuotes = require('./quotes/funny');
const epicQuotes = require('./quotes/epic');
const gameryQuotes = require('./quotes/gamery');
const stoicQuotes = require('./quotes/stoic');

// ✅ Combine all quotes into one array
const quotes = [
  ...motivationalQuotes,
  ...romanticQuotes,
  ...funnyQuotes,
  ...epicQuotes,
  ...gameryQuotes,
  ...stoicQuotes,
];

async function seedQuotes() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Quote.deleteMany({});
    await Quote.insertMany(quotes);

    console.log('✅ All quotes seeded successfully!');
    process.exit();
  } catch (err) {
    console.error('❌ Seeding error:', err);
    process.exit(1);
  }
}

seedQuotes();
