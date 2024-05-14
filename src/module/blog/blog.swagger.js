/**
 * @swagger
 *  tags:
 *      name: Blog
 *      description: create Blog
 */
/**
 * @swagger
 *  components:
 *      schemas:
 *          CreateBlog:
 *              type: object
 *              required:
 *                  -   title
 *                  -   author
 *                  -   text
 *              properties:
 *                  title:
 *                      type: string
 *                  author:
 *                      type: string
 *                  text:
 *                      type: string
 *          UpdateBlog:
 *              type: object
 *              properties:
 *                  title:
 *                      type: string
 *                  author:
 *                      type: string
 *                  text:
 *                      type: string
 *                  
 */
/**
 * @swagger
 *  /blog/create:
 *      post:
 *          tags:
 *              -   Blog
 *          summary: create blog
 *          requestBody:
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: "#/components/schemas/CreateBlog"
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/CreateBlog"
 *          responses:
 *              201:
 *                  description: success
 * 
 */
/**
 * @swagger
 *  /blog/getAll:
 *      get:
 *          tags:
 *              -   Blog
 *          summary: get all blogs in elastic
 *          parameters:
 *              -   in: query
 *                  name: value
 *                  type: string
 *                  required: false
 *          responses:
 *              200:
 *                  description: success
 */
/**
 * @swagger
 *  /blog/remove/{id}:
 *      delete:
 *          tags:
 *              -   Blog
 *          summary: remove blog by id
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  type: string
 *                  required: true
 *          responses:
 *              200:
 *                  description: success
 */
/**
 * @swagger
 *  /blog/update/{id}:
 *      patch:
 *          tags:
 *              -   Blog
 *          summary: blog updated
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  type: string
 *                  required: true
 *          requestBody:
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: "#/components/schemas/UpdateBlog"
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/UpdateBlog"
 *          responses:
 *              200:
 *                  desciption: success
 *                    
 */

/**
 * @swagger
 *  /blog/update2/{id}:
 *      patch:
 *          tags:
 *              -   Blog
 *          summary: blog updated 2
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  type: string
 *                  required: true
 *          requestBody:
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: "#/components/schemas/UpdateBlog"
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/UpdateBlog"
 *          responses:
 *              200:
 *                  desciption: success
 *                    
 */
/**
 * @swagger
 *  /blog/searchByTitle:
 *      get:
 *          tags:
 *              -   Blog
 *          summary: get blogs
 *          parameters:
 *              -   in: query
 *                  name: title
 *                  type: string
 *                  required: true
 *          responses:
 *              200:
 *                  description: success
 *      
 */
/**
 * @swagger
 *  /blog/searchByMultiFields:
 *      get:
 *          tags:
 *              -   Blog
 *          summary: get blogs
 *          parameters:
 *              -   in: query
 *                  name: search
 *                  type: string
 *          responses:
 *              200:
 *                  description: success
 *      
 */
/**
 * @swagger
 *  /blog/searchByRegexp:
 *      get:
 *          tags:
 *              -   Blog
 *          summary: get blogs
 *          parameters:
 *              -   in: query
 *                  name: search
 *                  type: string
 *          responses:
 *              200:
 *                  description: success
 *      
 */
/**
 * @swagger
 *  /blog/searchAllByRegexp:
 *      get:
 *          tags:
 *              -   Blog
 *          summary: get all blogs
 *          parameters:
 *              -   in: query
 *                  name: search
 *                  type: string
 *          responses:
 *              200:
 *                  description: success
 *      
 */


