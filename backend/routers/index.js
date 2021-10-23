const router = require('express').Router();
const config = require('../configs/app');
// const controllers = require('../../controllers/track.controller')
const controllers = require('../controllers/track.controller')

// router.use(`/api/v${config.apiVersion}`, require('./api/track'));
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.get('/channels/:mood', controllers.getAudioChannels);
router.get('/:mood', controllers.check)
module.exports = router;