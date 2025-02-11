import { Router } from "express"
import { createTask, deleteTask, getTask, getTasks, updateTask } from "../controllers/taskController"
import { validateBody, validateStatus } from "../middlewares/taskMiddleware"
const tasksRoute = Router()

tasksRoute.get('/tasks', getTasks)
tasksRoute.get('/tasks/:id', getTask)
tasksRoute.post('/tasks', validateBody, createTask)
tasksRoute.put('/tasks/:id', validateStatus, updateTask)
tasksRoute.delete('/tasks/:id', deleteTask)

export default tasksRoute