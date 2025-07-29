# kick-api-lite

Simple and lightweight JavaScript library for fetching streamer and stream info from [Kick.com](https://kick.com) using its public API.

Made for bots, dashboards, or any Node.js project that needs Kick stream data without authentication.

## 🔧 Installation

npm install kick-api-lite

## 🚀 Usage & API Reference

const {
  isStreamerLive,
  getStreamInfo,
  getChannelInfo
} = require('kick-api-lite');

(async () => {
  const username = 'yourrage';

  // Check if the streamer is currently live
  const isLive = await isStreamerLive(username);
  console.log(`${username} is live?`, isLive);
  // Output: yourrage is live? true

  // Get current stream information (only if live)
  const streamInfo = await getStreamInfo(username);
  console.log('Stream Info:', streamInfo);
  // Example output:
  // {
  //   title: 'Just Chilling',
  //   category: 'just-chatting',
  //   startedAt: '2025-07-28T20:00:00Z',
  //   url: 'https://kick.com/yourrage'
  // }

  // Get general info about the channel
  const channelInfo = await getChannelInfo(username);
  console.log('Channel Info:', channelInfo);
  // Example output:
  // {
  //   id: 123456,
  //   username: 'yourrage',
  //   name: 'yourrage',
  //   avatar: 'https://files.kick.com/default-avatar.jpg',
  //   bio: 'Professional streamer & gamer',
  //   followers: 34567,
  //   verified: true
  // }
})();

## 🛠 Built With

- Axios
- Kick.com public API (unofficial)

## 📄 License

MIT © Kamil
