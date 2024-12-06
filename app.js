// Import modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Import routes
const userRoutes = require("./src/userRoutes");
const voteRoutes = require("./src/voteRoutes");

// MongoDB Connection URI
const uri = "mongodb+srv://fanirifani22:212223@cluster0.damkj.mongodb.net/Pemilu2025?retryWrites=true&w=majority";

// Initialize the Express app
const app = express();
const PORT = process.env.PORT || 5500; // Port dapat diatur melalui environment variable

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
// MongoDB Connection
mongoose
  .connect(uri)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

// API Routes
app.use("/login", userRoutes);
app.use("/vote", voteRoutes);

// Catch-all Route for Undefined Endpoints
app.use((req, res) => {
  console.log(`Route not found: ${req.method} ${req.url}`); // Tambahkan logging
  res.status(404).json({ message: "Route not found" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
