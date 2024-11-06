// routes/exampleRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Example route to get data from MySQL
router.get('/User', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM User');
    res.json(rows);  // Send back the query results as JSON
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/Event', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM Event');
    res.json(rows);  // Send back the query results as JSON
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/Room', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM Room');
    res.json(rows);  // Send back the query results as JSON
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
