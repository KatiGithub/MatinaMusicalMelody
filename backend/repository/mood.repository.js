const config = require('../configs/database');
const { Client, Pool } = require('pg');
const { Observable } = require('rxjs');

const pool = new Pool(config);
const client = new Client(config)

class MoodRepository {
    constructor() {}

    async retrieveMoodsAndChannel_token() {
        const query = 'SELECT mood, channel_token FROM public."tblMood";';

        const res = await pool.query(query);
        
        var moods = {}
        res.rows.forEach((value) => {
            moods[value["mood"]] = value["channel_token"];
        });

        return moods;
    }

    listenForEvents() {
        client.connect();
        client.query('LISTEN notify_channelupdate');

        return new Observable((subject) => {
            client.on('notification', () => {
                subject.next();
            })
        })
    }

    async retrieveMoods() {
        const query = 'SELECT mood FROM public."tblMood";';

        const res = await pool.query(query);
        var moods = [];

        res.rows.forEach((value) => {
            moods.push(value["mood"]);
        })

        return moods;
    }
}

module.exports = {
    MoodRepository: MoodRepository
};