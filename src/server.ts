import express, { json } from 'express'
import tasksRoute from './routes/taskRoute'
import swagerRoute from './routes/swagerRoute'
import errorHandler from './middlewares/errorHandler'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3333

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

app.get('/test', (_, res) => {
  res.status(200).send({mensage: 'Hello World!'})
})

app.use(json())
app.use(swagerRoute)
app.use(tasksRoute)
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))