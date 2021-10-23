const { Client, Pool } = require('pg');
const config = require('../configs/dbconfig');

const pool = new Pool(config);
class TrackRepository {
    constructor() {}

    async getSongIdsForMood(mood) {
        var query = `SELECT tracks.trackid FROM public."tracks" as tracks JOIN public."tblMood" as mood ON tracks.moodid = mood.moodid WHERE mood.mood = '${mood}';`;

        const res = await pool.query(query);
        var idxs = [];

        res.rows.forEach((value) => {
            idxs.push(value['trackid']);
        });

        return idxs;
    }

    async getMoodFromTrackId(trackid) {
        var query = `SELECT moodid FROM public."tracks" WHERE trackid = ${trackid};`;

        const res = await pool.query(query);
        return res.rows[0]
    }
}

module.exports = {
    TrackRepository: TrackRepository
};