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
    const { seats, has_monitor, table_type, has_whiteboard } = req.query;

    // Start building the query and parameters
    let query = 'SELECT * FROM Room';
    const params = [];

    // Add conditions based on query parameters
    const conditions = [];
    if (seats) {
      conditions.push('seats >= ?');
      params.push(parseInt(seats, 10));
    }
    if (has_monitor) {
      conditions.push('has_monitor = ?');
      params.push(has_monitor === 'true');
    }
    if (table_type) {
      conditions.push('table_type = ?');
      params.push(table_type === 'square');
    }
    if (has_whiteboard) {
      conditions.push('has_whiteboard = ?');
      params.push(has_whiteboard === 'true');
    }

    // If any conditions were added, append them to the query
    if (conditions.length > 0) {
      query += ' WHERE ' + conditions.join(' AND ');
    }

    // Execute the query with parameters
    const [rows] = await db.execute(query, params);
    res.json(rows); // Send back the filtered results as JSON
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
