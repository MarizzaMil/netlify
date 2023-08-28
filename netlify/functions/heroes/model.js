const firestore = require('../../../src/db'); // Adjust the path as needed

const getHeroesModel = () => {
  return {
    findAll: async (callback) => {
      try {
        const snapshot = await firestore.collection('heroes').get();
        const heroes = snapshot.docs.map((doc) => {
          const data = doc.data();
          data.id = doc.id; // Add the id field to the data
          return data;
        });
        callback(heroes);
      } catch (err) {
        console.error('Firestore query error:', err.message);
        callback([]);
      }
    },
    create: async (name, superPower, callback) => {
      try {
        await firestore.collection('heroes').add({
          name,
          superPower,
        });
        callback(null, 'Hero created successfully');
      } catch (err) {
        console.error('Firestore query error:', err.message);
        callback('Error creating hero');
      }
    },

    update: async (id, name, superPower, callback) => {
      try {
        await firestore.collection('heroes').doc(id).update({
          name,
          superPower,
        });
        callback(null, 'Hero updated successfully');
      } catch (err) {
        console.error('Firestore query error:', err.message);
        callback('Error updating hero');
      }
    },

    delete: async (id, callback) => {
      try {
        await firestore.collection('heroes').doc(id).delete();
        callback(null, 'Hero deleted successfully');
      } catch (err) {
        console.error('Firestore query error:', err.message);
        callback('Error deleting hero');
      }
    },
  };
};

module.exports = getHeroesModel;
