require('dotenv').config();

module.exports = {
    port: process.env.PORT || 3000,
    isProduction: process.env.NODE_ENV === 'production',
    apiVersion: process.env.API_VERSION || 1,
    dbURI: 'postgres://postgres:music_2001@2.tcp.ngrok.io:14085/MatinaMusicalMelody'
}