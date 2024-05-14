import autoBind from "auto-bind"
import elasticClient from "../../config/elastic.config.js"
import createHttpError from "http-errors"
import { elasticMessage } from "./elastic.message.js"
class ElasticService {

    constructor() {
        autoBind(this)
    }
    async createIndex(index) {

        const result = await elasticClient.indices.create({ index: index })
        if (!result) throw new createHttpError.BadRequest(elasticMessage.ERROR_CREATE_INDEX)
        return result
    }


    async removeIndex(index) {
       
        const result =await elasticClient.indices.delete({index})
        return result

    }

    async getIndices() {
        const result = await elasticClient.indices.getAlias()
        const regex = /^\.+/
        return Object.keys(result).filter(item => !regex.test(item))
    }
}

export const elasticService = new ElasticService() 