const {Sections} = require('../models/models')
const ApiError = require('../error/ApiError')

class SectionsController {
    async create(req, res) {
        const {name} = req.body
        const section = await Sections.create({name})
        return res.json(section)
    }

    async getAll(req, res) {
        const sections = await Sections.findAll()
        return res.json(sections)
    }

    async getOne(req, res) {
        const {id} = req.params
        const section = await Sections.findOne(
            {where: {id}}
        )
        return res.json(section)
    }
}

module.exports = new SectionsController()