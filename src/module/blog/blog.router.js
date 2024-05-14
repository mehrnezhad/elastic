import { Router } from "express";
import { blogController } from "./blog.controller.js";
const router = Router()

router.post('/create',blogController.createBlog)
router.get('/getAll',blogController.getAll)
router.delete('/remove/:id',blogController.deleteBlog)
router.patch('/update/:id',blogController.updateBlog)
router.patch('/update2/:id',blogController.updateBlog2)
router.get('/searchByTitle',blogController.searchByTitle)
router.get('/searchByMultiFields',blogController.searchByMulti)
router.get('/searchByRegexp',blogController.searchByRegexp)
router.get('/searchAllByRegexp',blogController.searchAllByRegexp)

export const blogRouter = router