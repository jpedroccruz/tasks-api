import express, { json } from 'express'
import router from './routes'

const app = express()
const PORT = process.env.PORT || 3333

app.get('/test', (_, res) => {
  res.status(200).send({mensage: 'Hello World!'})
})

app.use(json())
app.use(router)

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))