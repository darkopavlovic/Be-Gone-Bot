const express = require("express");
const router = express.Router();
const axios = require("axios");

// Assign Twitch API variables
const BASE_OAUTH_URL = "https://id.twitch.tv/oauth2/token";
const BASE_STREAM_URL = "https://api.twitch.tv/helix/streams";
const BASE_CHAT_URL = "https://tmi.twitch.tv/group/user";
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

// Get stream data from Twitch
router.get("/stream/:username", async (req, res) => {
  try {
    const credentials = await axios.post(`${BASE_OAUTH_URL}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`);
    const response = await axios.get(`${BASE_STREAM_URL}?user_login=${req.params.username}`, { headers: { "Client-ID": CLIENT_ID, "Authorization": `Bearer ${credentials.data.access_token}` } });
    res.send(response.data.data[0]);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get chat data from TMI
router.get("/chat/:username", async (req, res) => {
  try {
    const response = await axios.get(`${BASE_CHAT_URL}/${req.params.username}`);
    res.send(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
