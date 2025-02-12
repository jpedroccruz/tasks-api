import { Router } from "express"
import { createTask, deleteTask, getTask, getTasks, updateTask } from "../controllers/taskController"
import { validateTitle, validateDescription, validateStatus } from "../middlewares/taskMiddleware"
const tasksRoute = Router()

tasksRoute.get('/tasks', getTasks)
tasksRoute.get('/tasks/:id', getTask)
tasksRoute.post('/tasks', validateTitle, validateDescription, createTask)
tasksRoute.put('/tasks/:id', validateStatus, updateTask)
tasksRoute.delete('/tasks/:id', deleteTask)

export default tasksRoute