require("dotenv").config();

const express = require("express");
const twatRoutes = require("./routes/twats");

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(new Date(), req.path, req.method);
  next();
});

// Routes
app.use("/api/v1/twats", twatRoutes);

// The Server
app.listen(port, () => {
  console.log("Listening on port", port);
});
