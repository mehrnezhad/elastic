import autoBind from "auto-bind"
import elasticClient from "../../config/elastic.config.js"
class BlogService {
    #indexName = "blog"
    constructor() {
        autoBind(this)

    }
    async createBlog(title, author, text) {
        try {

            const result = await elasticClient.index({
                index: this.#indexName,
                document: {
                    title,
                    author,
                    text
                }
            })

            return result
        } catch (error) {

            console.log(error)
        }
    }
    async getAll(value) {

        const result = await elasticClient.search({
            index: "blog",
            q: value
        })
        return result.hits.hits
    }

    async deleteBlog(id) {
        const result = await elasticClient.deleteByQuery({
            index: this.#indexName,
            query: {
                match: {
                    _id: id
                }
            }
        })
        return result

    }

    async updateBlog(data, id) {
        const lastResult = await elasticClient.search({
            index: this.#indexName,
            query:{
                match: {
                    _id: id
                }
            }
        })
        Object.keys(data).forEach(key=>{
            if(data[key] === null || data[key] === undefined){
                delete data[key]
            }
        })
        const payload = lastResult.hits.hits?.[0]._source || {}

        const result = await elasticClient.index({
            index: this.#indexName,
            id,
            body: {...payload , ...data}
        })
        return result
    }

    async updateBlog2(data, id) {
        
        Object.keys(data).forEach(key=>{
            if(data[key] === null || data[key] === undefined){
                delete data[key]
            }
        })

        const result = await elasticClient.update({
            index: this.#indexName,
            id,
            doc: data
        })
        return result
    }

    async searchByTitle(title){
        const result = await elasticClient.search({
            index : this.#indexName,
            query:{
                match:{
                    title : title
                }
            }
        })
        return result.hits.hits
    }
  
    
    async searchByMulti(search){
        const result = await elasticClient.search({
            index : this.#indexName,
            query:{
                multi_match:{
                    query : search,
                    fields : ['title','text','author']
                }
            }
        })

        return result.hits.hits
    }
  
    async searchByRegexp(search){
        const result = await elasticClient.search({
            index : this.#indexName,
            query:{
                regexp :{
                    title : `.*${search}.*`
                }
            }
        })
        return result.hits.hits
    }
    
    async searchAllByRegexp(search){
        const result = await elasticClient.search({
            index : this.#indexName,
            query:{
                bool:{
                    should:[
                        {
                            regexp : {
                                title : `.*${search}.*`
                            }
                        },
                        {
                            regexp : {
                                text : `.*${search}.*`
                            }
                        },
                        {
                            regexp : {
                                author : `.*${search}.*`
                            }
                        }
                    ]
                }
            }
        })
        return result.hits.hits
    }

}

export const blogService = new BlogService()