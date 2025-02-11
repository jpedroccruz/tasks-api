import { Router } from "express"
import { createTask, deleteTask, getTask, getTasks, updateTask } from "./controllers/taskController"
import { validateBody, validateStatus } from "./middlewares/taskMiddleware"
import swaggerJSDoc from "swagger-jsdoc"
import swaggerUi from 'swagger-ui-express'
import options from "./swagger"

const router = Router()

const specs = swaggerJSDoc(options)
router.use('/docs', swaggerUi.serve, swaggerUi.setup(specs))

router.get('/tasks', getTasks)
router.get('/tasks/:id', getTask)
router.post('/tasks', validateBody, createTask)
router.put('/tasks/:id', validateStatus, updateTask)
router.delete('/tasks/:id', deleteTask)

export default router