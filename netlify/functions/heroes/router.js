const express = require('express')
const connectToDB = require('../../../src/db')
const getHeroesModel = require('./model');
const router = express.Router()

router.get('/hello', (req, res) => {
  res.status(200).json({ "test": "Hello, Hero" });
})

// router.get('/heroes', async (req, res) => {
//   const HeroModel = getHeroesModel();

//   HeroModel.findAll((heroes) => {
//     res.status(200).json(heroes);
//   });
// });

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

  const HeroModel = getHeroesModel(); // Initialize the model

  HeroModel.create(name, superPower, (err, message) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error creating hero' });
    }

    return res.status(201).json({ message: 'Hero created successfully' });
  });
});

// Update a hero by ID
router.put('/heroes/:id', async (req, res) => {
  const { id } = req.params;
  const { name, superPower } = req.body;

  if (!name || !superPower) {
    return res.status(400).json({ message: 'Name and superPower are required' });
  }

  const HeroModel = getHeroesModel(); // Initialize the model

  HeroModel.update(id, name, superPower, (err, message) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error updating hero' });
    }

    return res.status(200).json({ message: 'Hero updated successfully' });
  });
});

// Delete a hero by ID
router.delete('/heroes/:id', async (req, res) => {
  const { id } = req.params;

  const HeroModel = getHeroesModel(); // Initialize the model

  HeroModel.delete(id, (err, message) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error deleting hero' });
    }

    return res.status(200).json({ message: 'Hero deleted successfully' });
  });
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