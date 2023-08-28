const express = require('express')
const getHeroesModel = require('./model');
const router = express.Router()

router.get('/heroes', async (req, res) => {
  const HeroModel = getHeroesModel();

  HeroModel.findAll((heroes) => {
      res.status(200).json(heroes);
  });
});


module.exports = router;