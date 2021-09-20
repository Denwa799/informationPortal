const {Regions} = require('../models/models')
const ApiError = require('../error/ApiError')

class RegionsController {
    async create(req, res) {
        const {name} = req.body
        const region = await Regions.create({name})
        return res.json(region)
    }

    async getAll(req, res) {
        const regions = await Regions.findAll()
        return res.json(regions)
    }
    async getOne(req, res) {
        const {id} = req.params
        const region = await Regions.findOne(
            {where: {id}}
        )
        return res.json(region)
    }
}

module.exports = new RegionsController()