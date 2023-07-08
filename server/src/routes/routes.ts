import express from "express";
import { searchEvent, searchName } from "../controllers/controllers";

const router = express.Router();

router.post("/figure/:name", searchName);
router.post("/event/:event", searchEvent);

export default router;
