import { Router } from "express";
import { elasticController } from "./elastic.controller.js";

const elasticRouter = Router()

elasticRouter.post('/create',elasticController.createIndex)
elasticRouter.get('/get',elasticController.getIndicies)
elasticRouter.delete('/remove/:indexID',elasticController.removeIndex)

export default elasticRouter