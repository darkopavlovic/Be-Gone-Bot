// Import required packages
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Channel.css";

export default function Channel({ username }) {
  // Channel data state
  const [viewCount, setViewCount] = useState(0);
  const [chatCount, setChatCount] = useState(0);
  const [displayName, setDisplayName] = useState("");

  // Get twitch stream and chat data
  const fetchData = () => {
    const streamAPI = axios.get(`http://localhost:8000/channel/stream/${username}`);
    const chatAPI = axios.get(`http://localhost:8000/channel/chat/${username}`);

    axios.all([streamAPI, chatAPI]).then(
      axios.spread((...allData) => {
        setViewCount(allData[0].data[0].viewer_count);
        setDisplayName(allData[0].data[0].user_name);
        setChatCount(allData[1].data.chatter_count);
      })
    );
  };

  // Calls fetchData on component load
  useEffect(() => {
    fetchData();
  }, []);

  // Renders channel view
  return (
    <div className="app-channel">
      <div className="container">
        <h2>
          {displayName}
          <a href={`https://www.twitch.tv/${username}`} target="_blank" rel="noopener noreferrer">
            <img src={require("./assets/external.svg")} alt="link" />
          </a>
        </h2>
        <img src={require("./assets/robot.png")} alt="robot" />
        <h4>View Count: {viewCount}</h4>
        <h4>Chat Count: {chatCount}</h4>
        <h4>Bots: {viewCount > chatCount ? viewCount - chatCount : chatCount - viewCount}</h4>
        <h4>Bot Ratio: {viewCount > chatCount ? (((viewCount - chatCount) / viewCount) * 100).toFixed(2) : (((chatCount - viewCount) / chatCount) * 100).toFixed(2)}%</h4>
      </div>
    </div>
  );
}
