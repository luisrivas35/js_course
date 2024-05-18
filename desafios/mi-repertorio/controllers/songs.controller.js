import { nanoid } from "nanoid"
import { Song } from "../models/songs.model.js"
import { handleError } from "../database/errors.js"

export const getAllSongs = async (req, res) => {
    try {
        const songs = await Song.findAll()
        return res.json(songs)
    } catch (error) {
        console.log(error)
        const { code, msg } = handleError(error)
        return res.status(code).json({ ok: false, msg })
    }
}

export const getSong = async (req, res) => {
    
    try {
        const { id } = req.params
        // validar que tenga formato nanoid???
        const song = await Song.findOneById(id)
        if (!song) {
            return res.status(404).json({ ok: false, msg: '404' })
        }
        return res.json(song)
    } catch (error) {
        console.log(error)
        const { code, msg } = handleError(error)
        return res.status(code).json({ ok: false, msg })
    }
}

export const createSong = async (req, res) => {
    console.log(req.body)
    try {
        const { titulo, artista, tono } = req.body

        if (!titulo || !artista || !tono) {
            return res.status(400).json({ ok: false, msg: "campos obligatorios" })
        }

        const newSong = {
            titulo,
            artista,
            tono,
            id: nanoid()
        }

        const song = await Song.create(newSong)
        return res.json(song)
    } catch (error) {
        console.log(error)
        const { code, msg } = handleError(error)
        return res.status(code).json({ ok: false, msg })
    }
}

export const removeSong = async (req, res) => {
    console.log(req.params)
    try {
        const { id } = req.params
        const song = await Song.remove(id)
        return res.json(song)
    } catch (error) {
        console.log(error)
        const { code, msg } = handleError(error)
        return res.status(code).json({ ok: false, msg })
    }
}

export const updateSong = async (req, res) => {
    console.log(req.params)
    console.log(req.body)
    try {
        const { id } = req.params
        const { titulo, artista, tono } = req.body
        const song = await Song.update({
            id,
            titulo,
            artista,
            tono
        })
        return res.json(song)
    } catch (error) {
        console.log(error)
        const { code, msg } = handleError(error)
        return res.status(code).json({ ok: false, msg })
    }
}