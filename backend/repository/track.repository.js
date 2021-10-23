const config = require('../configs/database');
const { Client, Pool } = require('pg');

const pool = new Pool(config);

class TrackRepository {
    
}