import 'dotenv/config'
import express from 'express'

import cuentaRouter from './router/cuenta.route.js'
import transferRouter from './router/transferencia.route.js'

const app = express()

// Middlewares req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/cuentas', cuentaRouter)
app.use('/api/v1/transfer', transferRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`)
})