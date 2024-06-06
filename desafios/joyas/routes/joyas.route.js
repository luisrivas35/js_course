import { Router } from "express";
import { getAllJoyas, getJoyasByCategoria, getJoyasFiltered, getJoyaById } from "../controllers/joyasController";

const router = Router();

router.get("/joyas", getAllJoyas);
router.get("/joyas/categoria/:categoria", getJoyasByCategoria);
router.get("/joyas/filter", getJoyasFiltered);
router.get("/joyas/:id", getJoyaById);

export default router;
