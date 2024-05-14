import { Router } from "express";
import elasticRouter from "./module/elastic/elastic.route.js";
import { blogRouter } from "./module/blog/blog.router.js";
const router = Router()

router.use('/index',elasticRouter)
router.use('/blog',blogRouter)

router.get("/",(req,res,next)=>{
    res.render("pages/index",{
        messages: "salam"
    })
})


export default router