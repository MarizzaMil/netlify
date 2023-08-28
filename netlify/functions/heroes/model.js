const firestore = require('../../../src/db'); // Adjust the path as needed

const getHeroesModel = () => {
  return {
    findAll: async (callback) => {
      try {
        const snapshot = await firestore.collection('heroes').get();
        console.log(snapshot)
        const heroes = snapshot.docs.map((doc) => doc.data());
        callback(heroes);
      } catch (err) {
        console.error('Firestore query error:', err.message);
        callback([]);
      }
    },
    // ... other methods
  };
};

module.exports = getHeroesModel;
