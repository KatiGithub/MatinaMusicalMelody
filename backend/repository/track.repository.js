const { query } = require('express');
const { Client, Pool } = require('pg');
const dbConfig = require('../configs/database');

const pool = new Pool(dbConfig);

pool.connect((err, client, release)=> {
    if(err) {
        console.error('Database connection error', err.stack);
    }
    else {
        console.log('Connected');
    }

    client.query('LISTEN notify_channelupdate');

    client.on('notification', async (data => {
        const result = JSON.parse(data.payload);
        console.log('new tokens: ' + result);

    }))
    
})

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