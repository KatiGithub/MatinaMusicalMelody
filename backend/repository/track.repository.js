const { query } = require('express');
const { Client, Pool } = require('pg');
const dbConfig = require('../configs/database');

const pool = new Pool(dbConfig);

    // const getChannelID = (request, response) => {
    //     pool.query('SELECT * FROM words WHERE mood = @a ORDER BY random() LIMIT 1;', (err, results) => {
    //         if(err) {
    //             throw err
    //         }
    //         response.status(200).json(results.rows)
    //     }
    //     )
    // }

async function getChannelID(mood) {
    // const channelID = await pool.query('SELECT * FROM words WHERE mood = @a ORDER BY random() LIMIT 1;',
    //     [mood],
    //     (err, result) => {
    //         if(err){ throw err}
    //         console.log(result)
    //     }
    // )
    // return channelID;
    return mood;
}

async function check(mood) {
    return mood;
}


// class TrackRepostiory {

// }

module.exports = {
    getChannelID,
    check
};