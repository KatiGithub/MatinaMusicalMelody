const { Client, Pool } = require('pg');
const config = require('../configs/dbconfig');

const pool = new Pool(config);

class ChannelRepository {
    insertChannel(shortid) {
        query = `INSERT INTO channels()`
    }
}