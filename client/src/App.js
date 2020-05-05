// Import required packages
import React, { useState } from "react";
import "./App.css";
import Channel from "./Channel";

function App() {
  // App state
  const [username, setUsername] = useState("");
  const [visible, setVisible] = useState(false);

  // Handle onChange event for user input
  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  // Displays channel component
  const displayChannelData = (e) => {
    e.preventDefault();
    setVisible(true);
  };

  // Renders main app view
  return (
    <div className="App">
      <header>
        <h1 className="app-title">
          <span role="img" aria-label="robot">
            🤖
          </span>{" "}
          Be Gone Bot{" "}
          <span role="img" aria-label="robot">
            🤖
          </span>
        </h1>
      </header>
      <section>
        <h3>
          How does this work?{" "}
          <span role="img" aria-label="thinking">
            🤔
          </span>
        </h3>
        <p>Be Gone Bot compares the current viewer count with the number of users in chat.</p>
        <p>If the channel has significantly more viewers than users in chat, then it's probably viewbotting.</p>
        <form className="app-form" onSubmit={displayChannelData}>
          <input className="app-input" type="text" placeholder="Enter Twitch Username" value={username} onChange={updateUsername} />
          <button className="app-button" type="submit">
            Search
          </button>
        </form>
        {visible ? <Channel username={username}></Channel> : null}
      </section>
    </div>
  );
}

export default App;
