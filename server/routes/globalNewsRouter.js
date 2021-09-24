const Router = require('express')
const router = new Router()
const globalNewsController = require('../controllers/globalNewsController')

router.post('/', globalNewsController.create)
router.get('/', globalNewsController.getAll)
router.get('/:id', globalNewsController.getOne)


module.exports = router