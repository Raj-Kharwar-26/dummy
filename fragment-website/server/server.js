const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const subscriptionRoutes = require('./routes/Subscription');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Atlas connection (replace with your actual connection string)
const MONGODB_URI = 'mongodb+srv://raj:raj1234@cluster0.cpgcz2u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGODB_URI)
.then(() => console.log('Connected to MongoDB '))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', subscriptionRoutes);

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Fragment Website API is running!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
