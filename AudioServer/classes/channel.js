const { spawn } = require('child_process');
const shortid = require('shortid');
const { MoodRepository } = require('../repository/mood.repository');

class Channel {
    songids = [];

    constructor(songids) {
        this.songids = songids;

        this.callFFmpeg().then(() => {
            console.error('We should never reach here');
        });
    }

    async callFFmpeg() {
        while(true) {
            var songid = this.songids[(Math.random() * this.songids.length) | 0];
            var channel_token = shortid.generate();
            new MoodRepository().updateChannelTokenFromTrackId(songid, channel_token);
            var ffmpegcaller = spawn('ffmpeg', [
                ('../public/' + JSON.stringify(songid) + '.mp3'),
                '-c',
                'copy',
                '-f',
                'flv',
                `rtmp://localhost/live/${channel_token}`
            ])
    
            ffmpegcaller.on('close', (code) => {
                console.log(`process exited with code ${code}`);    
            })
        }
    }
}

module.exports = {
    Channel: Channel
};