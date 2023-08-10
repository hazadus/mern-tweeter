require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const twatRoutes = require("./routes/twats");

const app = express();
const port = process.env.PORT || 8000;
const mongoDBAddress = process.env.MONGO_DB_ADDRESS;

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(new Date(), "⚡️", req.path, req.method);
  next();
});

// Routes
app.use("/api/v1/twats", twatRoutes);

// Establish DB connection
mongoose
  .connect(mongoDBAddress)
  .then(() => {
    console.log("🔌 Connected to MongoDB at", mongoDBAddress);

    // The Server
    app.listen(port, () => {
      console.log("📡 Listening on port", port);
    });
  })
  .catch((error) => {
    console.log("❌ Error connecting to DB:", error);
  });
