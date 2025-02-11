import { Router } from "express"
import swaggerJSDoc from "swagger-jsdoc"
import swaggerUi from 'swagger-ui-express'
import options from "../swagger"
const swagerRoute = Router()

const specs = swaggerJSDoc(options)
swagerRoute.use('/docs', swaggerUi.serve, swaggerUi.setup(specs))

export default swagerRoute