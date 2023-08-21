const mongoose = require('mongoose');

const connectToDB = async () => {
  try {
    mongoose.set('strictQuery', true);
    const connectionString = `mongodb+srv://marizzamil89:d3tqMgzW86359LfB@netlify.d0dqquy.mongodb.net/test?retryWrites=true&w=majority`;
    mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log("mongoose Connected!"))
      .catch(error => {
        console.error("Mongoose connection error:", error);
      });
  } catch (error) {
    console.error(error);
    console.error("Mongoose Error");
  }
}

module.exports = connectToDB;
