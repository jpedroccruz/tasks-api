import { Router } from "express"
import { createTask, deleteTask, getTask, getTasks, updateTask } from "../controllers/taskController"
import { validateTitle, validateDescription, validateStatus, validateTaskId } from "../middlewares/taskMiddleware"
const tasksRoute = Router()

tasksRoute.get('/tasks', getTasks)
tasksRoute.get('/tasks/:id', validateTaskId, getTask)
tasksRoute.post('/tasks', validateTitle, validateDescription, createTask)
tasksRoute.put('/tasks/:id', validateTaskId, validateStatus, updateTask)
tasksRoute.delete('/tasks/:id', validateTaskId, deleteTask)

export default tasksRoute