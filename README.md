# Be Gone Bot ![GitHub package.json version](https://img.shields.io/github/package-json/v/darkopavlovic/Be-Gone-Bot)

Tool for detecting fake engagement on Twitch.

Be Gone Bot compares the current viewer count with the number of users in chat. If the channel has significantly more viewers than users in chat, then it's probably viewbotting. If the channel has more users in chat than viewers, then those are most likely chat bots.

**Disclaimer:** This tool is for educational purposes only and is not affiliated with Twitch. It should not be used as definitive proof to start witch hunts. To learn more about viewbotting and fake engagement check out the official Twitch [page](https://help.twitch.tv/s/article/how-to-handle-view-follow-bots?language=en_US).

# Usage

This app is hosted on [Heroku](https://begonebot.herokuapp.com).

# Installing

- **Prerequisite:** Node 12.x
- Install dependencies by running `npm run setup`.
- Create a .env file that contains PORT, NODE_ENV, CLIENT_ID, CLIENT_SECRET.
- Start dev server with `npm run dev`.

# License

This project is licensed under the MIT License.
