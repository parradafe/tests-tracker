const express = require('express');
const db = require('../models');

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const items = await db.test.findAll();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving tests', error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const item = await db.test.findOne({ where: { id: req.params.id } });

    if (!item) {
      return res.status(404).json({ message: 'Test not found' });
    }

    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving test', error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const item = await db.test.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ message: 'Error creating test', error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const item = await db.test.findOne({ where: { id: req.params.id } });

    if (!item) {
      return res.status(404).json({ message: 'Test not found' });
    }

    await item.update(req.body);
    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ message: 'Error updating test', error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const item = await db.test.findOne({ where: { id: req.params.id } });

    if (!item) {
      return res.status(404).json({ message: 'Test not found' });
    }

    await item.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting test', error: error.message });
  }
});

module.exports = router;
