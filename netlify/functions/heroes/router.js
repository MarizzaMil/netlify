const express = require('express')
const connectToDB = require('../../../src/db')
const getHeroesModel = require('./model');
const router = express.Router()

router.get('/hello', (req, res) => {
  res.status(200).json({ "test": "Hello, Hero"});
})

router.get('/', async (req, res) => {
  const HeroModel = getHeroesModel();

  HeroModel.findAll((heroes) => {
    res.status(200).json(heroes);
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