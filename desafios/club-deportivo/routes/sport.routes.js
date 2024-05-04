import {Router} from 'express';
import {
  getAllSports,
  getSport,
  createSport,
  modifySport,
  deleteSport  
} from "../controllers/sport.controller.js";

const router = Router();

router.get("/sports", getAllSports);

router.get("/sports/:id", getSport);

router.post("/sports", createSport);

router.put("/sports/:id", modifySport);

router.delete("/sports/:id", deleteSport);

router.get("/", (req, res) => {
    res.render("home")
});


export default router;