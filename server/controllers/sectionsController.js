const {Sections} = require('../models/models')
const ApiError = require('../error/ApiError')

class SectionsController {
    async create(req, res, next) {
        try {
            const {name, regionId} = req.body
            const section = await Sections.create({name, regionId})
            return res.json(section)
        } catch (e) {
            next(ApiError.badRequest((e.message)))
        }

    }

    async getAll(req, res, next) {
        try {
            const sections = await Sections.findAll()
            return res.json(sections)
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
            const section = await Sections.findOne(
                {where: {id}}
            )
            return res.json(section)
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
            const section = await Sections.destroy(
                {where: {id}}
            )
            return res.json(section)
        } catch (e) {
            next(ApiError.badRequest((e.message)))
        }
    }
}

module.exports = new SectionsController()