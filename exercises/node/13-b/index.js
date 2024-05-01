import express, { urlencoded } from 'express'
const app = express()

const __dirname = import.meta.dirname

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/enviar', (req, res) => {
    const { asunto, correo, descripcion } = req.query

    if (!asunto || !correo || !descripcion) {
        return res.status(400).json({ ok: false, msg: "todos los campos obligatorios" })
    }

    // enviar el correo...

    return res.json({ ok: "mensaje enviado..." })
})

app.post('/enviar', (req, res) => {

    const { asunto, correo, descripcion } = req.body

    if (!asunto || !correo || !descripcion) {
        return res.status(400).json({ ok: false, msg: "todos los campos obligatorios" })
    }

    // enviar el correo...

    return res.json({ ok: "mensaje enviado..." })
})

app.put('/enviar', (req, res) => {

    console.log(req.body)
    const { asunto, correo, descripcion } = req.body

    if (!asunto || !correo || !descripcion) {
        return res.status(400).json({ ok: false, msg: "todos los campos obligatorios" })
    }

    // enviar el correo...

    return res.json({ ok: "mensaje enviado..." })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`)
})