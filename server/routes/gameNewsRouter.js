const Router = require('express')
const router = new Router()
const gameNewsController = require('../controllers/gameNewsController')

router.post('/', gameNewsController.create)
router.get('/', gameNewsController.getAll)
router.get('/:id', gameNewsController.getOne)
router.delete('/:id', gameNewsController.delete)


module.exports = router