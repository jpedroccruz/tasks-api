import express, { json } from 'express'
import { getTasks, getTask, createTask, updateTask, deleteTask } from './controllers/taskController'

const app = express()
const PORT = process.env.PORT || 3333

app.get('/test', (_, res) => {
  res.status(200).send({mensage: 'Hello World!'})
})

app.use(json())
app.get('/tasks', getTasks)
app.get('/tasks/:id', getTask)
app.post('/tasks', createTask)
app.put('/tasks/:id', updateTask)
app.delete('/tasks/:id', deleteTask)

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))