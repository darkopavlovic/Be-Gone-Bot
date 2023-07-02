import { AppBar, Box, Container, CssBaseline, FormControlLabel, Switch, Toolbar, Typography } from "@material-ui/core";
import { useState } from "react";
import "./App.css";
import Channel from "./Channel";

function App() {
  const [username, setUsername] = useState("");
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

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
    const tempUsername = username.replace(/\s+/g, "").toLowerCase();
    if (tempUsername.length !== 0) {
      setQuery(tempUsername);
      setVisible(true);
    } else {
      setUsername("");
    }
  };

  // Renders main app view
  return (
    <>
      <CssBaseline />
      <Box height="100%" style={darkTheme ? { background: "#262626" } : { background: "white" }}>
        <AppBar position="static" style={darkTheme ? { background: "black" } : { background: "#9146FF" }}>
          <Toolbar>
            <Typography variant="h3">Be Gone Bot</Typography>
            <FormControlLabel label="Dark Mode 🌙" labelPlacement="start" control={<Switch checked={darkTheme} onChange={darkMode} />} />
          </Toolbar>
        </AppBar>
        <Container maxWidth="md">
          <Typography variant="h6" style={darkTheme ? { fontWeight: "bold", color: "white" } : { fontWeight: "bold", color: "black" }}>
            How does this work?
          </Typography>
          <Typography variant="body1" style={darkTheme ? { color: "white" } : { color: "black" }}>
            Be Gone Bot compares the current viewer count with the number of users in chat. If the channel has significantly more viewers than users in chat, then it's probably viewbotting or embedded viewers. If the channel has more users in chat
            than viewers, then those are most likely chat bots.
          </Typography>
          <form className="form-group" onSubmit={displayChannelCard}>
            <input className="form-input" type="text" placeholder="Enter Twitch Username" value={username} onChange={updateUsername} />
            <button className="form-button" type="submit">
              Search
            </button>
          </form>
          {visible ? <Channel username={query} theme={darkTheme}></Channel> : null}
        </Container>
      </Box>
    </>
  );
}

export default App;
