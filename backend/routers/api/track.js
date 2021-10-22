const router = require('express').Router();
const controllers = require('../../controllers/track.controller')

router.get('/channels', controllers.getAudioTracks);