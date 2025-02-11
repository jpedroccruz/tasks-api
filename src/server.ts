import express, { json } from 'express'
import tasksRoute from './routes/taskRoute'
import swagerRoute from './routes/swagerRoute'

const app = express()
const PORT = process.env.PORT || 3333

app.get('/test', (_, res) => {
  res.status(200).send({mensage: 'Hello World!'})
})

app.use(json())
app.use(swagerRoute)
app.use(tasksRoute)

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))