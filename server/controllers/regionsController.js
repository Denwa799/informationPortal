const {Regions} = require('../models/models')
const ApiError = require('../error/ApiError')

class RegionsController {
    async create(req, res, next) {
        try {
            const {name} = req.body
            const region = await Regions.create({name})
            return res.json(region)
        } catch (e) {
            next(ApiError.badRequest((e.message)))
        }
    }

    async getAll(req, res, next) {
        try {
            const regions = await Regions.findAll()
            return res.json(regions)
        } catch (e) {
            next(ApiError.badRequest((e.message)))
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params
            const region = await Regions.findOne(
                {where: {id}}
            )
            return res.json(region)
        } catch (e) {
            next(ApiError.badRequest((e.message)))
        }
    }
}

module.exports = new RegionsController()