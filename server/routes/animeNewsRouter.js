const Router = require('express')
const router = new Router()
const animeNewsController = require('../controllers/animeNewsController')

router.post('/', animeNewsController.create)
router.get('/', animeNewsController.getAll)
router.get('/:id', animeNewsController.getOne)
router.delete('/:id', animeNewsController.delete)


module.exports = router