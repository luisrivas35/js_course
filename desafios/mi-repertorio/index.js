 import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import songsRoutes from './routes/songs.route.js'

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))

app.use('/cancion', songsRoutes)


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Canciones app listening on PORT ${PORT}`)
})