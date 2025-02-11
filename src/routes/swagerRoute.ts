import { Router } from "express"
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../swagger.json'
const swagerRoute = Router()

swagerRoute.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

export default swagerRoute