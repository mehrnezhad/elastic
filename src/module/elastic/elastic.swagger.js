/**
 * @swagger
 *  tags:
 *      name: Elastic
 *      description: elasticSearch route and modules
 */
/**
 * @swagger
 *  components:
 *      schemas:
 *          Addindex:
 *              type: object
 *              required:
 *                  -   index
 *              properties:
 *                  index:
 *                      type: string
 */
/**
 * @swagger
 *  /index/create:
 *      post:
 *          tags:
 *              -   Elastic
 *          summary: create index
 *          requestBody:
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: "#/components/schemas/Addindex"
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/Addindex"
 *          responses:
 *              201:
 *                  description: success
 * 
 */
/**
 * @swagger
 *  /index/get:
 *      get:
 *          tags:
 *              -   Elastic
 *          summary: get elastic search
 *          responses:
 *              200:
 *                  description: success
 */
/**
 * @swagger
 *  /index/remove/{indexID}:
 *      delete:
 *          tags:
 *              -   Elastic
 *          summary: delete elastic search indexid
 *          parameters:
 *              -   in: path
 *                  type: string
 *                  name: index
 *                  required: true
 *          responses:
 *              200:
 *                  description: success
 *          
 */