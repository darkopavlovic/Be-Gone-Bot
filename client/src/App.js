// Import required packages
import React, { useState } from "react";
import axios from "axios";

function App() {
  // State for channel data
  const [username, setUsername] = useState("");
  const [viewCount, setViewCount] = useState(0);
  const [chatCount, setChatCount] = useState(0);
  const [live, setLive] = useState(false);

  // GET Twitch channel data
  const getUserData = (e) => {
    e.preventDefault();
    // Update viewCount
    axios.get(`http://localhost:8000/channel/stream/${username}`).then((response) => {
      if (response.data[0] !== undefined) {
        return setViewCount(response.data[0].viewer_count), setLive(true);
      } else {
        return setViewCount(0), setLive(false);
      }
    });

    // Update chatCount
    axios.get(`http://localhost:8000/channel/chat/${username}`).then((response) => {
      return setChatCount(response.data.chatter_count);
    });
  };

  // Handle onChange event for user input
  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className="App">
      <h1>🤖 Be Gone Bot 🤖</h1>
      <form className="search-form" onSubmit={getUserData}>
        <input type="text" placeholder="Enter Twitch Username" value={username} onChange={updateUsername} />
        <button type="submit">Search</button>
      </form>
      <h1>Username: {username}</h1>
      <h2>View Count: {viewCount}</h2>
      <h2>Chat Count: {chatCount}</h2>
      <h2>Bots: {viewCount - chatCount}</h2>
      <h2>Bot %: {((viewCount - chatCount) / viewCount) * 100}</h2>
    </div>
  );
}

export default App;
