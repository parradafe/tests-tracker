const express = require('express');
const db = require('../models');

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const items = await db.user.findAll();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving users', error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const item = await db.user.findOne({ where: { id: req.params.id } });

    if (!item) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user', error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const item = await db.user.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ message: 'Error creating user', error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const item = await db.user.findOne({ where: { id: req.params.id } });

    if (!item) {
      return res.status(404).json({ message: 'User not found' });
    }

    await item.update(req.body);
    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ message: 'Error updating user', error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const item = await db.user.findOne({ where: { id: req.params.id } });

    if (!item) {
      return res.status(404).json({ message: 'User not found' });
    }

    await item.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error: error.message });
  }
});

module.exports = router;
