import express from "express";
import {
  getAllTwats,
  getTwat,
  createTwat,
  deleteTwat,
  updateTwat,
  options,
} from "../controllers/twatController.js";

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

// OPTIONS - handle CORS stuff
router.options("/", options);

export default router;
