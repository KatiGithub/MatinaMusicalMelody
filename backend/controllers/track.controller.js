const queries = require('../repository/track.repository');

const methods = {
    async getAudioChannels(req, res) {
        // try {
        //     const channelID = await queries.getChannelID(req.params.mood);
        //     return channelID;
        // } 
        // catch(error) {
        //     console.log(error)
        // }
        const id = await queries.getChannelID(req.params.mood);
        return id;
    }, 

    async check(req){
        const result = await queries.check(req.params.mood);
        return result;
    }

}

module.exports = methods;