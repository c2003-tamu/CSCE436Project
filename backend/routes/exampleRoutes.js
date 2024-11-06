const express = require('express');
const router = express.Router();

// GET route
router.get('/', (req, res) => {
  res.send('Hello from GET route');
});

// POST route
router.post('/', (req, res) => {
  res.send('Hello from POST route');
});

module.exports = router;
