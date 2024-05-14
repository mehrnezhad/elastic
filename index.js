import express from "express"
import { config } from "dotenv"
import path from "path"
import expressEjsLayouts from "express-ejs-layouts"
import router from "./src/app.route.js"
import notFoundHandler from "./src/common/not-found.js"
import allExceptionHandler from "./src/common/all-exception.js"
import swaggerCongif from "./src/config/swagger.config.js"
const app = express()
config()
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static(path.join(process.cwd(),"/public")))
app.use(expressEjsLayouts)
swaggerCongif(app)
app.set("view engine", "ejs")
app.set("views", "views");
app.set("layout", "layouts/master");
app.set("layout extractStyles", true);
app.set("layout extractScripts", true)

app.use(router)


allExceptionHandler(app)
notFoundHandler(app)
const { PORT } = process.env
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})