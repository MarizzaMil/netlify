// const mongoose = require('mongoose');

// const heroesSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   superPower: {
//     type: String,
//     required: true
//   }
// });

// const getHeroesModel = async () => {
//   let mongooseModel = null;
//   try {
//     if (mongoose.models.Hero) {
//       mongooseModel = mongoose.model('Hero'); // 'actions' collection
//     } else {
//       mongooseModel = mongoose.model('Hero', heroesSchema); // 'actions' collection
//     }
//   } catch (error) {
//     console.error(error);
//   }
//   return mongooseModel;
// }

// module.exports = getHeroesModel;

// const connectToDB = require('../../../src/db');

// const getHeroesModel = () => {
//   const db = connectToDB();

//   return {
//     findAll: (callback) => {
//       const query = 'SELECT * FROM heroes';
//       db.all(query, [], (err, rows) => {
//         if (err) {
//           console.error('SQLite query error:', err.message);
//           callback([]);
//         } else {
//           callback(rows);
//         }
//       });
//     }
//     // ... other functions as needed
//   };
// };

// module.exports = getHeroesModel;


const connectToDB = require('../../../src/db');

const getHeroesModel = () => {
  const db = connectToDB();

  return {
    findAll: async (callback) => {
      try {
        const result = await db.query('SELECT * FROM heroes');
        callback(result.rows);
      } catch (err) {
        console.error('CockroachDB query error:', err.message);
        callback([]);
      }
    },
    create: async (name, superPower, callback) => {
      try {
        await db.query('INSERT INTO heroes (name, superpower) VALUES ($1, $2)', [name, superPower]);
        callback(null, 'Hero created successfully');
      } catch (err) {
        console.error('CockroachDB query error:', err.message);
        callback('Error creating hero');
      }
    },
    update: async (id, name, superPower, callback) => {
      try {
        await db.query('UPDATE heroes SET name = $1, superpower = $2 WHERE id = $3', [name, superPower, id]);
        callback(null, 'Hero updated successfully');
      } catch (err) {
        console.error('CockroachDB query error:', err.message);
        callback('Error updating hero');
      }
    },
    delete: async (id, callback) => {
      try {
        await db.query('DELETE FROM heroes WHERE id = $1', [id]);
        callback(null, 'Hero deleted successfully');
      } catch (err) {
        console.error('CockroachDB query error:', err.message);
        callback('Error deleting hero');
      }
    },
  };
};

module.exports = getHeroesModel;




