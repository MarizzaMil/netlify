// const mongoose = require('mongoose');

// const connectToDB = async () => {
//   try {
//     mongoose.set('strictQuery', true);
//     const connectionString = `mongodb+srv://marizzamil89:d3tqMgzW86359LfB@netlify.d0dqquy.mongodb.net/test?retryWrites=true&w=majority`;
//     mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
//       .then(() => console.log("mongoose Connected!"))
//       .catch(error => {
//         console.error("Mongoose connection error:", error);
//       });
//   } catch (error) {
//     console.error(error);
//     console.error("Mongoose Error");
//   }
// }

// module.exports = connectToDB;



// const sqlite3 = require('sqlite3').verbose();
// const connectToDB = () => {
//     const db = new sqlite3.Database(':memory:', (err) => {
//         if (err) {
//             console.error('SQLite connection error:', err.message);
//         } else {
//             console.log('Connected to the SQLite database in memory');
//         }
//     });
//     db.serialize(() => {
//         db.run(`
//       CREATE TABLE heroes (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         name TEXT NOT NULL,
//         superPower TEXT NOT NULL
//       )
//     `);
//         // Insert some sample data into the heroes table
//         const insertStmt = db.prepare('INSERT INTO heroes (name, superPower) VALUES (?, ?)');
//         insertStmt.run('Superman', 'Flight and strength');
//         insertStmt.run('Batman', 'Intelligence and gadgets');
//         insertStmt.run('Wonder Woman', 'Amazonian powers');
//         insertStmt.finalize();
//     });
//     return db;
// };
// module.exports = connectToDB;


const sqlite3 = require('sqlite3').verbose();

const connectToDB = () => {
    const db = new sqlite3.Database('./heroes.db', (err) => {
        if (err) {
            console.error('SQLite connection error:', err.message);
        } else {
            console.log('Connected to the SQLite database');
        }
    });

    db.serialize(() => {
        db.run(`
            CREATE TABLE IF NOT EXISTS heroes (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                superPower TEXT NOT NULL
            )
        `);

        // Insert some sample data into the heroes table if needed
        // const insertStmt = db.prepare('INSERT INTO heroes (name, superPower) VALUES (?, ?)');
        // insertStmt.run('Superman', 'Flight and strength');
        // insertStmt.run('Batman', 'Intelligence and gadgets');
        // insertStmt.run('Wonder Woman', 'Amazonian powers');
        // insertStmt.finalize();
    });

    return db;
};

module.exports = connectToDB;
