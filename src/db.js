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


// const sqlite3 = require('sqlite3').verbose();
// const path = require('path');

// const connectToDB = () => {
//     // const dbPath = path.join(__dirname, 'heroes.db');
//     // const dbPath = '/var/task/heroes.db';
//     const dbPath = path.join(__dirname, 'heroes.db');

//     console.log('Database Path:', dbPath);

//     const db = new sqlite3.Database(dbPath, (err) => {
//         if (err) {
//             console.error('SQLite connection error:', err.message);
//         } else {
//             console.log('Connected to the SQLite database');
//         }
//     });

//   db.serialize(() => {
//     db.run(`
//       CREATE TABLE IF NOT EXISTS heroes (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         name TEXT NOT NULL,
//         superPower TEXT NOT NULL
//       )
//     `);

//         // Insert some sample data into the heroes table if needed
//         // const insertStmt = db.prepare('INSERT INTO heroes (name, superPower) VALUES (?, ?)');
//         // insertStmt.run('Superman', 'Flight and strength');
//         // insertStmt.run('Batman', 'Intelligence and gadgets');
//         // insertStmt.run('Wonder Woman', 'Amazonian powers');
//         // insertStmt.finalize();
//     });

//     return db;
// };

// module.exports = connectToDB;



const { Client } = require('pg');

const connectToDB = () => {
    const client = new Client({
        user: 'marizza',
        host: 'heroes-9840.8nj.cockroachlabs.cloud',
        database: 'heroes_db',
        password: 'NJ-WIp-tqZiDv4jQvOrB3w',
        port: 26257, // Default CockroachDB port
        ssl: {
            rejectUnauthorized: false, // For local development
        },
    });
    
    client.connect();
    
    return client;
};

module.exports = connectToDB;
