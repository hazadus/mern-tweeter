import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import twatRoutes from "./routes/twats.js";

// Load environment variables from `.env` to `process.env`:
dotenv.config();

const port = process.env.PORT || 8000;
const mongoDBAddress = process.env.MONGO_DB_ADDRESS;
const app = express();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  // Handle CORS
  res.set("Access-Control-Allow-Origin", "*");
  // Log the request
  console.log(new Date(), "⚡️", req.path, req.method);
  // Pass to next middleware
  next();
});

// Routes
app.use("/api/v1/twats", twatRoutes);

// Establish DB connection
// `serverSelectionTimeoutMS` sets timeout for connection and queries.
mongoose
  .connect(mongoDBAddress, {
    serverSelectionTimeoutMS: 5000,
  })
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
