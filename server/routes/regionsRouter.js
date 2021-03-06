const Router = require('express')
const router = new Router()
const regionsController = require('../controllers/regionsController')

router.post('/', regionsController.create)
router.get('/', regionsController.getAll)
router.get('/:id', regionsController.getOne)
router.delete('/:id', regionsController.delete)


module.exports = router