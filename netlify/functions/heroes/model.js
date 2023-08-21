const mongoose = require('mongoose');

const heroesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  superPower: {
    type: String,
    required: true
  }
});

const getHeroesModel = async () => {
  let mongooseModel = null;
  try {
    if (mongoose.models.Hero) {
      mongooseModel = mongoose.model('Hero'); // 'actions' collection
    } else {
      mongooseModel = mongoose.model('Hero', heroesSchema); // 'actions' collection
    }
  } catch (error) {
    console.error(error);
  }
  return mongooseModel;
}

module.exports = getHeroesModel;