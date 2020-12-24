const express = require("express");
const path = require("path");

// Express gets called
const app = express();

// Dev environment
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Prod environment
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

// Channel route
app.use("/channel", require("./routes/channel"));

// Port assignment
const PORT = process.env.PORT;

// Server listening
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
