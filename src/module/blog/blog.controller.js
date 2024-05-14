import autoBind from "auto-bind"
import { StatusCodes } from "http-status-codes"
import { blogService } from "./blog.service.js"
class BlogController {
    #service
    constructor(){
       autoBind(this)   
       this.#service=blogService
    }

    async createBlog(req,res,next){
        try {
            const {title , author , text }= req.body
            const result = await this.#service.createBlog(title , author , text)
            return res.status(201).json({
                statusCode: StatusCodes.CREATED,
                data:{
                    result
                }
                
            })
        } catch (error) {
            next(error)
        }
    }

    async getAll(req,res,next){
        try {
            const {value} = req.query

            const result = await this.#service.getAll(value)
            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                data:{
                    result
                }
            })
     } catch (error) {
            next(error)
        }
    }

    async deleteBlog(req,res,next){
        try {
            const {id} = req.params
            const result = await this.#service.deleteBlog(id)
            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                data:{
                    result
                }
            })

        } catch (error) {
            next(error)
        }
    }
    async updateBlog(req,res,next){
        try {
            const {id} = req.params
            
            const result = await this.#service.updateBlog( req.body , id)
            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                data:{
                    result
                }
            })
        } catch (error) {
            next(error)
        }
    }
    async updateBlog2(req,res,next){
        try {
            const {id} = req.params
            const result = await this.#service.updateBlog2( req.body , id)
            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                data:{
                    result
                }
            })
        } catch (error) {
            next(error)
        }
    }
    async searchByTitle(req,res,next){
        try {
            const {title} = req.query
            const result = await this.#service.searchByTitle(title)
            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                data:{
                    result
                }
            })
        } catch (error) {
            next(error)
        }
    }
    
    async searchByMulti(req,res,next){
        try {
            const {search} = req.query
            const result = await this.#service.searchByMulti(search)
            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                data:{
                    result
                }
            })
        } catch (error) {
            next(error)
        }
    }

    async searchByRegexp(req,res,next){
        try {
            const {search} = req.query
            const result = await this.#service.searchByRegexp(search)
            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                data:{
                    result
                }
            })

        } catch (error) {
            next(error)
        }
    }

    
    async searchAllByRegexp(req,res,next){
        try {
            const {search} = req.query
            const result = await this.#service.searchAllByRegexp(search)
            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                data:{
                    result
                }
            })

        } catch (error) {
            next(error)
        }
    }
}

export const blogController = new BlogController()