const fs = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
fs.initializeApp({
 credential: fs.credential.cert(serviceAccount)
});

  const firestore = fs.firestore();
  module.exports = firestore;