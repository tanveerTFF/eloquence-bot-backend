//app.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./utils/db');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Chat route
const chatRoutes = require('./routes/chat');
app.use('/api/chat', chatRoutes);

//quote route
const quoteRoutes = require('./routes/quotes');
app.use('/api/quotes', quoteRoutes);


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
