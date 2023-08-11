import express from "express";
import { getAllTwats, getTwat, createTwat } from "../controllers/twatController.js";

const router = express.Router();

// GET all twats
router.get("/", getAllTwats);

// GET a single twat
router.get("/:id", getTwat);

// POST a new twat
router.post("/", createTwat);

// DELETE a single twat
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a single twat" });
});

// UPDATE a single twat
router.patch("/:id", (req, res) => {
  res.json({ message: "UPDATE (PATCH) a single twat" });
});

export default router;
