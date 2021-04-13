const express = require('express')

const ReleaseController = require('../controllers/releaseController')
const MovieCtrl = require('../controllers/movie-ctrl')
const RequestController = require('../controllers/requestController')
const AnswerController = require('../controllers/answerController')

const router = express.Router()

router.get('/releases', ReleaseController.getReleases)
router.post('/releases',ReleaseController.postRelease)
router.get('/requests', RequestController.getRequest)
router.post('/requests',RequestController.postRequest)
router.get('/answers', AnswerController.getAnswer)
router.post('/answers', AnswerController.postAnswer)

router.post('/movie', MovieCtrl.createMovie)
router.put('/movie/:id', MovieCtrl.updateMovie)
router.delete('/movie/:id', MovieCtrl.deleteMovie)
router.get('/movie/:id', MovieCtrl.getMovieById)
router.get('/movies', MovieCtrl.getMovies)

module.exports = router