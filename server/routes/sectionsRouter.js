const Router = require('express')
const router = new Router()
const sectionsController = require('../controllers/sectionsController')

router.post('/', sectionsController.create)
router.get('/', sectionsController.getAll)
router.get('/:id', sectionsController.getOne)



module.exports = router