const dbConfig = {
    user: 'postgres',
    host: process.env.DB_HOSTNAME,
    port: process.env.DP_PORT,
    database: 'MatinaMusicalMelody',
    password: 'music_2001',
};

module.exports = dbConfig;