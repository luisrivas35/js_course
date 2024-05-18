import { Router } from "express";
import { createSong, getAllSongs, getSong, removeSong, updateSong } from "../controllers/songs.controller.js";

const router = Router()

// URL /Songss

router.get('/', getAllSongs)
router.get('/:id', getSong)
router.post('/', createSong)
router.delete('/:id', removeSong)
router.put('/:id', updateSong)

export default router