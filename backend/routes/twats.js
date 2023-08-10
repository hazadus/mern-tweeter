const express = require("express");

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
router.post("/", (req, res) => {
  console.log(req.body);
  res.json({ message: "POST a new twat" });
});

// DELETE a single twat
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a single twat" });
});

// UPDATE a single twat
router.patch("/:id", (req, res) => {
  res.json({ message: "UPDATE (PATCH) a single twat" });
});

module.exports = router;
