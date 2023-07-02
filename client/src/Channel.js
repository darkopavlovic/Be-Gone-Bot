import { Button, Card, CardActions, CardContent, CircularProgress, Link, Typography } from "@material-ui/core";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Channel.css";

export default function Channel({ username, theme }) {
  const [viewCount, setViewCount] = useState(0);
  const [chatCount, setChatCount] = useState(0);
  const [displayName, setDisplayName] = useState("");
  const [finishedLoading, setFinishedLoading] = useState(false);
  const [live, setLive] = useState(false);

  // Get Twitch stream and chat data
  const fetchData = () => {
    const streamAPI = axios.get(`/channel/stream/${username}`);
    const chatAPI = axios.get(`/channel/chat/${username}`);

    axios.all([streamAPI, chatAPI]).then(
      axios.spread((...allData) => {
        if (allData[0].data.length !== 0) {
          setViewCount(allData[0].data.viewer_count);
          setDisplayName(allData[0].data.user_name);
          setChatCount(allData[1].data.chatter_count);
          setLive(true);
          setFinishedLoading(true);
        } else {
          setLive(false);
          setFinishedLoading(true);
        }
      })
    );
  };

  // Calls fetchData on username update
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [username]);

  // Renders channel view
  if (live === true && finishedLoading === true) {
    return (
      <Card raised={true} style={theme ? { background: "black", color: "white" } : { background: "white", color: "black" }}>
        <CardContent>
          <Typography variant="h4">{displayName}</Typography>
          <img src="https://static-cdn.jtvnw.net/emoticons/v1/28/3.0" alt="robot" />
          <Typography variant="subtitle1">View Count: {viewCount}</Typography>
          <Typography variant="subtitle1">Chat Count: {chatCount}</Typography>
          <Typography variant="subtitle1">Bots: {viewCount > chatCount ? viewCount - chatCount : chatCount - viewCount}</Typography>
          <Typography variant="subtitle1">Bot Ratio: {viewCount > chatCount ? (((viewCount - chatCount) / viewCount) * 100).toFixed(2) : (((chatCount - viewCount) / chatCount) * 100).toFixed(2)}%</Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="large" style={{ background: "#9146FF", marginLeft: "auto", marginRight: "auto" }}>
            <Link href={`https://www.twitch.tv/${username}`} target="_blank" rel="noopener noreferrer" underline="none" style={{ color: "white" }}>
              Watch Live
            </Link>
          </Button>
        </CardActions>
      </Card>
    );
  } else if (live === false && finishedLoading === true) {
    return (
      <Card raised={true} style={theme ? { background: "black", color: "white" } : { background: "white", color: "black" }}>
        <CardContent>
          <Typography variant="h4">Offline</Typography>
          <img src="https://static-cdn.jtvnw.net/emoticons/v1/58765/3.0" alt="offline" />
        </CardContent>
        <CardActions>
          <Button variant="contained" size="large" style={{ background: "#9146FF", marginLeft: "auto", marginRight: "auto", marginTop: 81 }}>
            <Link href={`https://www.twitch.tv/${username}`} target="_blank" rel="noopener noreferrer" underline="none" style={{ color: "white" }}>
              Visit Channel
            </Link>
          </Button>
        </CardActions>
      </Card>
    );
  } else {
    return <CircularProgress size={75} style={{ color: "#9146FF", marginTop: 90 }} />;
  }
}
