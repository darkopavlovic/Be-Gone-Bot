// Import required packages
const express = require("express");
const morgan = require("morgan");

// Express gets called
const app = express();

// Dev environment
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
  app.use(morgan("dev"));
}

// Prod environment

// Channel route
app.use("/channel", require("./routes/channel"));

// Port assignment
const port = process.env.PORT;

// Server listening
app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});
