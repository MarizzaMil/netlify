const express = require('express')
const connectToDB = require('../../../src/db')
const getHeroesModel = require('./model');
const router = express.Router()

router.get('/hello', (req, res) => {
  res.status(200).json({ "test": "Hello, Hero" });
})

router.get('/heroes', async (req, res) => {
  const HeroModel = getHeroesModel();

  HeroModel.findAll((heroes) => {
    res.status(200).json(heroes);
  });
});

router.post('/heroes', async (req, res) => {
  const { name, superPower } = req.body;

  if (!name || !superPower) {
    return res.status(400).json({ message: 'Name and superPower are required' });
  }

  const db = connectToDB();

  const insertStmt = db.prepare('INSERT INTO heroes (name, superPower) VALUES (?, ?)');
  insertStmt.run(name, superPower);
  insertStmt.finalize();

  db.close();

  res.status(201).json({ message: 'Hero created successfully' });
});

router.put('/heroes/:id', async (req, res) => {
  const { id } = req.params;
  const { name, superPower } = req.body;

  const db = connectToDB();

  const updateStmt = db.prepare('UPDATE heroes SET name = ?, superPower = ? WHERE id = ?');
  updateStmt.run(name, superPower, id);
  updateStmt.finalize();

  db.close();

  res.status(200).json({ message: 'Hero updated successfully' });
});

// Delete a hero by ID
router.delete('/heroes/:id', async (req, res) => {
  const { id } = req.params;

  const db = connectToDB();

  const deleteStmt = db.prepare('DELETE FROM heroes WHERE id = ?');
  deleteStmt.run(id);
  deleteStmt.finalize();

  db.close();

  res.status(200).json({ message: 'Hero deleted successfully' });
});

// router.get('/', async (req, res) => {
//     await connectToDB();

//     const HeroModel = await getHeroesModel();

//     if (!HeroModel) {
//       res.status(500).send('HeroModel model not defined');
//       return;
//     }

//     try {
//       const heroes = await HeroModel.find();
//       res.status(200).json(heroes);
//     } catch (error) {
//       console.error(error);
//       res.status(500).send('Server Error');
//     }
//   });
module.exports = router;