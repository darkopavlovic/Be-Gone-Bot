# Be Gone Bot ![GitHub package.json version](https://img.shields.io/github/package-json/v/darkopavlovic/Be-Gone-Bot) [![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

Tool for detecting fake engagement on Twitch.

Be Gone Bot compares the current viewer count with the number of users in chat. If the channel has significantly more viewers than users in chat, then it's probably viewbotting or embedded viewers. If the channel has more users in chat than viewers, then those are most likely chat bots.

**Disclaimer:** This tool is for educational purposes only and is not affiliated with Twitch. It should not be used as definitive proof to accuse users of viewbotting. To learn more about viewbotting and fake engagement check out the official Twitch [page](https://help.twitch.tv/s/article/how-to-handle-view-follow-bots?language=en_US).

## Usage

This app is hosted on [Render](https://be-gone-bot.onrender.com).

## Installing

- Prerequisite: Node 20.X.X
- Install dependencies by running `npm run setup`
- Create a .env files that contains PORT, NODE_ENV, CLIENT_ID, CLIENT_SECRET, REACT_APP_API_URL
- Start dev server with `npm run dev`

## Tech Stack

- NodeJS with Express
- React
- Twitch API
- Material UI
- Render

## License

This project is licensed under the MIT License.
