import express from "express";
import { TwatValidationSchema } from "../models/validation.js";
import twatModel from "../models/twatModel.js";

const router = express.Router();

// GET all twats
router.get("/", (req, res) => {
  res.json({ message: "GET all twats" });
});

// GET a single twat
router.get("/:id", (req, res) => {
  res.json({ message: "GET a single twat" });
});

// POST a new twat
router.post("/", async (req, res) => {
  const body = req.body;

  // Validate
  let { error } = TwatValidationSchema.validate(body);
  if (error) {
    console.log("🚨 Error validating twat:", error.message);
    res.status(400).json({ message: error.message.replace(/"/g, "") });
  }

  // Create new DB document
  try {
    const twat = await twatModel.create(body);
    res.status(200).json(twat);
  } catch (error) {
    console.log("🚨 Error saving twat to DB:", error.message);
    res.status(500).json({ message: error.message });
  }
});

// DELETE a single twat
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a single twat" });
});

// UPDATE a single twat
router.patch("/:id", (req, res) => {
  res.json({ message: "UPDATE (PATCH) a single twat" });
});

export default router;
