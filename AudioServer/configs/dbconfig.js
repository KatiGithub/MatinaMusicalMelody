const dotenv = require('dotenv');
dotenv.config();

const dbConfig = {
    user: 'postgres',
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT,
    database: 'MatinaMusicalMelody',
    password: 'music_2001'
};

module.exports = dbConfig;