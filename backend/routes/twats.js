import express, { urlencoded } from "express";
import { getAllTwats, getTwat, createTwat, deleteTwat, updateTwat } from "../controllers/twatController.js";

const router = express.Router();

// GET all twats
router.get("/", getAllTwats);

// GET a single twat
router.get("/:id", getTwat);

// POST a new twat
router.post("/", createTwat);

// DELETE a single twat
router.delete("/:id", deleteTwat);

// UPDATE a single twat
router.patch("/:id", updateTwat);

router.options("/", (req, res) => {});

export default router;
