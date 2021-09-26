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
            let {sectionId, limit, page} = req.query
            page = page || 1
            limit = limit || 9
            let offset = page * limit - limit
            let news

            if (sectionId) {
                news = await GlobalNews.findAndCountAll({where: {sectionId}, limit, offset})
            } else {
                news = await GlobalNews.findAndCountAll({limit, offset})
            }

            return res.json(news)
        } catch (e) {
            next(ApiError.badRequest((e.message)))
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params
            if (!id) {
                res.status(400).json({message: 'Id не указан'})
            }
            const news = await GlobalNews.findOne(
                {
                    where: {id}
                }
            )
            return res.json(news)
        } catch (e) {
            next(ApiError.badRequest((e.message)))
        }
    }

    async delete(req, res, next) {
        try {
            const {id} = req.params
            if (!id) {
                res.status(400).json({message: 'Id не указан'})
            }
            const region = await GlobalNews.destroy(
                {where: {id}}
            )
            return res.json(region)
        } catch (e) {
            next(ApiError.badRequest((e.message)))
        }
    }
}

module.exports = new GlobalNewsController()