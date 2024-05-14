import autoBind from "auto-bind"
import { elasticService } from "./elastic.service.js"
import { StatusCodes } from "http-status-codes"

class ElasticController {
    #service
    constructor() {
        autoBind(this)
        this.#service = elasticService
    }
    async createIndex(req, res, next) {
        const { index } = req.body
        const result = await this.#service.createIndex(index)
        return res.status(StatusCodes.CREATED).json({
            statusCode: StatusCodes.CREATED,
            data: {
                result
            }
        })
        try {

        } catch (error) {
            next(error)
        }
    }


    async removeIndex(req, res, next) {
        try {
            const { index } = req.params
            const result = await this.#service.removeIndex(index)
            res.json({
                statusCode: StatusCodes.OK,
                data: {
                    result
                }
            })
        } catch (error) {
            next(error)
        }
    }

    async getIndicies(req, res, next) {
        try {
            const result = await this.#service.getIndices()
            return res.json({
                statusCode: StatusCodes.OK,
                data: {
                    result
                }
            })
        } catch (error) {
            next(error)
        }
    }
}

export const elasticController = new ElasticController() 