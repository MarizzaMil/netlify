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
