const { Client, Pool } = require('pg');
const dbConfig = require('../configs/database');

const pool = new Pool(dbConfig);
class TrackRepostiory {
}