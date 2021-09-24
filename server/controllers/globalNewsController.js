const uuid = require('uuid')
const path = require('path')

const {GlobalNews} = require('../models/models')
const ApiError = require('../error/ApiError')

class GlobalNewsController {
    async create(req, res, next) {
        try {
            let {title, preview, text, sectionId} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            await img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const news = await GlobalNews.create({title, preview, text, sectionId, img: fileName})

            return res.json(news)
        }catch (e) {
            next(ApiError.badRequest((e.message)))
        }

    }

    async getAll(req, res) {

    }
    async getOne(req, res) {

    }
}

module.exports = new GlobalNewsController()