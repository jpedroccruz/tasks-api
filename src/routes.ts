import { Router } from "express"
import { createTask, deleteTask, getTask, getTasks, updateTask } from "./controllers/taskController"
import { validateBody, validateStatus } from "./middlewares/taskMiddleware"

const router = Router()

router.get('/tasks', getTasks)
router.get('/tasks/:id', getTask)
router.post('/tasks', validateBody, createTask)
router.put('/tasks/:id', validateStatus, updateTask)
router.delete('/tasks/:id', deleteTask)

export default router