// Import required packages
const express = require("express");
const router = express.Router();
const axios = require("axios");

// Assign Twitch API variables
const BASE_STREAM_URL = "https://api.twitch.tv/helix/streams";
const BASE_OAUTH_URL = "https://id.twitch.tv/oauth2/token";
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

// Get stream data from Twitch
router.get("/:username", async (req, res) => {
  try {
    await axios
      .post(`${BASE_OAUTH_URL}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`)
      .then((response) => {
        return axios.get(`${BASE_STREAM_URL}?user_login=${req.params.username}`, { headers: { "Client-ID": CLIENT_ID, "Authorization": `Bearer ${response.data.access_token}` } });
      })
      .then((response) => {
        res.send(response.data);
      });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
