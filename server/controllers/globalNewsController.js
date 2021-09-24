const uuid = require('uuid')
const path = require('path')

const {GlobalNews} = require('../models/models')
const ApiError = require('../error/ApiError')

class GlobalNewsController {
    async create(req, res, next) {
        try {
            let {title, preview, text, sectionId, regionId} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            await img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const news = await GlobalNews.create({title, preview, text, sectionId, regionId, img: fileName})

            return res.json(news)
        } catch (e) {
            next(ApiError.badRequest((e.message)))
        }

    }

    async getAll(req, res, next) {
        try {
            const {sectionId, regionId} = req.body
            let news

            if (!sectionId && !regionId) {
                news = await GlobalNews.findAll()
            }
            if (sectionId && !regionId) {
                news = await GlobalNews.findAll({where: {sectionId}})
            }
            if (!sectionId && regionId) {
                news = await GlobalNews.findAll({where: {regionId}})
            }
            if (sectionId && regionId) {
                news = await GlobalNews.findAll({where: {sectionId, regionId}})
            }

            return res.json(news)
        } catch (e) {
            next(ApiError.badRequest((e.message)))
        }
    }

    async getOne(req, res) {

    }
}

module.exports = new GlobalNewsController()