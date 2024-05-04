import {Router} from 'express';
import {
  getAllSports,
  getSport,
  createSport,
  modifySport,
  deleteSport,
  allJson,
  addSport,
  editSport,
  removeSport
} from "../controllers/sport.controller.js";

const router = Router();

router.get("/sports", getAllSports);

router.get("/json", allJson);

router.get("/sportid/:id", getSport);

router.get("/createSport", createSport);

router.post("/add", addSport);

router.get("/editSport", editSport);

router.put("/edit/:id", modifySport);

router.get("/removeSport", removeSport);

router.delete("/deleteSport/:id", deleteSport);

router.get("/", (req, res) => {
    res.render("home")
});


export default router;