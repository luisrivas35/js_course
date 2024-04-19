import express from 'express'
import { writeFile, readFile, rename, unlink } from 'node:fs/promises'

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/crear', async (req, res) => {
    try {
        // crear un archivo.txt
        const dirFile = './data/archivo.txt'
        await writeFile(dirFile, 'Este es mi primer archivo')
        return res.json({
            ok: true,
            mensaje: 'archivo creado'
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            mensaje: 'Error de servidor'
        })
    }
})

app.get('/leer', async (req, res) => {
    try {
        const dirFile = './data/archivo.txt'
        const data = await readFile(dirFile, 'utf-8')
        return res.json({
            ok: true,
            mensaje: data
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            mensaje: 'Error de servidor'
        })
    }
})

app.put('/actualizar', async (req, res) => {
    try {
        const oldFile = './data/archivo.txt'
        const newFile = './data/archivo-actualizado.txt'
        await rename(oldFile, newFile)
        return res.json({
            ok: true,
            mensaje: 'archivo actualizado'
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            mensaje: 'Error de servidor'
        })
    }
})

app.delete('/eliminar/:nombre', async (req, res) => {
    try {

        const nombre = req.params.nombre
        const dirFile = `./data/${nombre}.txt`
        await unlink(dirFile)

        return res.json({
            ok: true,
            mensaje: 'archivo eliminado'
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            mensaje: 'Error de servidor'
        })
    }
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`)
})