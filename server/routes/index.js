const Router = require('express')
const router = new Router()
const globalNewsRouter = require('./globalNewsRouter')
const gameNewsRouter = require('./gameNewsRouter')
const animeNewsRouter = require('./animeNewsRouter')
const regionsRouter = require('./regionsRouter')
const sectionsRouter = require('./sectionsRouter')

router.use('/news', globalNewsRouter)
router.use('/gamenews', gameNewsRouter)
router.use('/animenews', animeNewsRouter)
router.use('/regions', regionsRouter)
router.use('/sections', sectionsRouter)


module.exports = router