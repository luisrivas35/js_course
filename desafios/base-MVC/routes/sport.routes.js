import {Router} from 'express';
import { createSport, deleteSport, getAllSports, getSport, modifySport } from '../controllers/sport.controller.js';

const router = Router();


router.get('/', getAllSports);

router.get('/:id', getSport);

router.post('/', createSport);

router.put('/:id', modifySport);

router.delete('/:id', deleteSport);


export default router;