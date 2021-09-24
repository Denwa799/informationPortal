const Router = require('express')
const router = new Router()
const sectionsController = require('../controllers/sectionsController')

router.post('/', sectionsController.create)
router.get('/', sectionsController.getAll)
router.get('/:id', sectionsController.getOne)
router.delete('/:id', sectionsController.delete)



module.exports = router