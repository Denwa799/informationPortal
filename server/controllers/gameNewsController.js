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
            let news = await GameNews.findAll()
            return res.json(news)
        } catch (e) {
            next(ApiError.badRequest((e.message)))
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params
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