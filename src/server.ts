import express from 'express'
import { getTasks, getTask } from './controllers/taskController'

const app = express()
const PORT = process.env.PORT || 3333

app.get('/test', (_, res) => {
  res.status(200).send({mensage: 'Hello World!'})
})

app.get('/tasks', getTasks)
app.get('/tasks/:id', getTask)

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))