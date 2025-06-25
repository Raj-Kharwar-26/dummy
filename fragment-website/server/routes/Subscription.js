const express = require('express');
const router = express.Router();
const Subscription = require('./model/Subscription'); // ✔️ correct

router.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const existing = await Subscription.findOne({ email });
    if (existing) {
      return res.status(400).json({ error: 'You have already subscribed!' });
    }

    await Subscription.create({ email });
    res.status(201).json({ message: 'Thank you for subscribing!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;
