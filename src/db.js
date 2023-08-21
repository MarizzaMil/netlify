const mongoose = require('mongoose');

const connectToDB = async () => {
  try {
    mongoose.set('strictQuery', true);
    const connectionString = `${process.env.DB_URL}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
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
