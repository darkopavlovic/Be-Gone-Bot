const express = require("express");
const cors = require("cors");

// Initialize Express and middleware
const app = express();
app.use(
  cors({
    origin: `${process.env.CORS_ORIGIN}`
  })
);

// Dev environment
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Health check route
app.get("/health", (req, res) => {
  res.send("Hello from Server 👋");
});

// Channel route
app.use("/channel", require("./routes/channel"));

// Port assignment
const PORT = process.env.PORT;

// Server listening
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
