const NodeMediaServer = require('node-media-server');
const config = require('./configs/nodemediaserverconfig');
const { Channel } = require('./classes/channel');
const { MoodRepository } = require('./repository/mood.repository');
const { TrackRepository } = require('./repository/track.repository');

var nms = new NodeMediaServer(config);

startFunc = async () => {
    nms.run();
}

startFunc().then(() => {
    new MoodRepository().retrieveMoods().then((moods) => {
        console.log(moods);
        var channels = [];
        moods.forEach(value => {
            new TrackRepository().getSongIdsForMood(value).then((songidxs) => {
                if(songidxs.length > 0) {
                    channels.push(new Channel(songidxs));
                    console.log(songidxs);
                }
            });
        })
    });


    // console.log(moods);
    // var channels = [];
    // moods.forEach(value => {
    //     songidxs = new TrackRepository().getSongIdsForMood(value);
    //     channels.push(new Channel(songidxs));

    //     console.log(songidxs);
    // }); 
});