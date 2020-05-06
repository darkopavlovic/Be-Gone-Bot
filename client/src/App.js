// Import required packages
import { AppBar, Toolbar, Typography, Container, CssBaseline, Switch, FormControlLabel } from "@material-ui/core";
import React, { useState } from "react";
import "./App.css";
import Channel from "./Channel";

function App() {
  // App state
  const [username, setUsername] = useState("");
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(false);
  const [darkTheme, setDarkTheme] = useState(true);

  // Handle onChange event for dark mode
  const darkMode = () => {
    setDarkTheme(!darkTheme);
  };

  // Handle onChange event for user input
  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  // Displays channel component
  const displayChannelCard = (e) => {
    e.preventDefault();
    setQuery(username);
    setVisible(true);
  };

  // Renders main app view
  return (
    <>
      <CssBaseline />
      <AppBar position="static" style={darkTheme ? { background: "black" } : { background: "#9146FF" }}>
        <Toolbar>
          <Typography variant="h3">🤖 Be Gone Bot 🤖</Typography>
          <FormControlLabel label="Dark Mode 🌙" labelPlacement="start" control={<Switch checked={darkTheme} onChange={darkMode} />} />
        </Toolbar>
      </AppBar>
      <Container disableGutters={true} maxWidth={false} style={darkTheme ? { background: "#262626" } : { background: "white" }}>
        <Container maxWidth="md">
          <Typography variant="h6" style={darkTheme ? { fontWeight: "bold", color: "white" } : { fontWeight: "bold", color: "black" }}>
            How does this work? 🤔
          </Typography>
          <Typography variant="body1" style={darkTheme ? { color: "white" } : { color: "black" }}>
            Be Gone Bot compares the current viewer count with the number of users in chat. If the channel has significantly more viewers than users in chat, then it's probably viewbotting. If the channel has more users in chat than viewers, then
            those are most likely chat bots.
          </Typography>
          <form className="form-group" onSubmit={displayChannelCard}>
            <input className="form-input" type="text" placeholder="Enter Twitch Username" value={username} onChange={updateUsername} />
            <button className="form-button" type="submit">
              Search
            </button>
          </form>
          {visible ? <Channel username={query} theme={darkTheme}></Channel> : null}
        </Container>
      </Container>
    </>
  );
}

export default App;
