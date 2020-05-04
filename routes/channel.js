// Import required packages
const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/:username", async (req, res) => {
  res.send("works");
});

module.exports = router;
