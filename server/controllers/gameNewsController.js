const uuid = require('uuid')
const path = require('path')

const {GameNews} = require('../models/models')
const ApiError = require('../error/ApiError')

class GameNewsController {
    async create(req, res, next) {
        try {
            let {title, preview, text} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            await img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const news = await GameNews.create({title, preview, text, img: fileName})

            return res.json(news)
        } catch (e) {
            next(ApiError.badRequest((e.message)))
        }

    }

    async getAll(req, res, next) {
        try {
            let {limit, page} = req.query
            page = page || 1
            limit = limit || 9
            let offset = page * limit - limit

            let news = await GameNews.findAndCountAll({limit, offset})
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
            const news = await GameNews.findOne(
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
            const region = await GameNews.destroy(
                {where: {id}}
            )
            return res.json(region)
        } catch (e) {
            next(ApiError.badRequest((e.message)))
        }
    }
}

module.exports = new GameNewsController()