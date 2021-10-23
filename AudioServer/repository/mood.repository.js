const { Client, Pool } = require('pg');
const { TrackRepository } = require('./track.repository');
const config = require('../configs/dbconfig');

const pool = new Pool(config);

class MoodRepository {
    constructor() {}

    async retrieveMoods() {
        const query = 'SELECT mood FROM public."tblMood";';

        const res = await pool.query(query);
        var moods = [];

        res.rows.forEach((value) => {
            moods.push(value['mood']);
        });

        return moods;
    }

    async updateChannelToken(moodtobeupdated, channel_token) {
        const query = `UPDATE public."tblMood" SET channel_token = '${channel_token}' WHERE mood = '${moodtobeupdated}';'`;
        await pool.query(query);
    }

    async updateChannelTokenFromTrackId(songid, channel_token) {
        new TrackRepository().getMoodFromTrackId(songid).then(async (moodid) => {
            const query = `UPDATE public."tblMood" SET channel_token = '${channel_token}' WHERE moodid = ${moodid};`;
            await pool.query(query);
        });
    }
}

module.exports = {
    MoodRepository: MoodRepository
};