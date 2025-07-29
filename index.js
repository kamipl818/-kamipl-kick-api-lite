const axios = require("axios");

/**
 * Checks if a streamer is live on Kick
 */
async function isStreamerLive(username) {
  const res = await axios.get(`https://kick.com/api/v2/channels/${username}`);
  return res.data.livestream !== null;
}

/**
 * Retrieves stream information for a given username
 */
async function getStreamInfo(username) {
  const res = await axios.get(`https://kick.com/api/v2/channels/${username}`);
  const stream = res.data.livestream;
  if (!stream) return null;

  return {
    title: stream.session_title,
    category: stream.category?.slug || "unknown",
    startedAt: stream.created_at,
    url: `https://kick.com/${username}`
  };
}

/**
 * Returns channel info for a given username
 */
async function getChannelInfo(username) {
  const res = await axios.get(`https://kick.com/api/v2/channels/${username}`);
  const channel = res.data;

  return {
    id: channel.id,
    username: channel.username,
    name: channel.slug,
    avatar: channel.user.profile_pic,
    bio: channel.user.bio,
    followers: channel.followersCount,
    verified: channel.verified
  };
}

module.exports = {
  isStreamerLive,
  getStreamInfo,
  getChannelInfo
};
