const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

module.exports = {
  "SESSION_ID": process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=yig1SCTZ#e9UiNW1znXoKGFcYrLTMbNh_dVV6aiPb1RUFRXl0QMY",
  "ALIVE_IMG": process.env.ALIVE_IMG || "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg",
  "PREFIX": process.env.PREFIX || ".",
  "AUTO_READ_STATUS": process.env.AUTO_READ_STATUS === 'false',
  "MODE": process.env.MODE || "private",
  "OWNER_NUMBER": process.env.OWNER_NUMBER || "94716619989",
  "OWNER_NAME": process.env.OWNER_NAME || "Senura Prasad",
  "ALWAYS_ONLINE": process.env.ALWAYS_ONLINE === 'false',
  "PRESENCE": process.env.PRESENCE || "online",
  "OMDB_API_KEY": process.env.OMDB_API_KEY || "76cb7f39",
  "READ_CMD": process.env.READ_CMD === 'false',
  "AUTO_VOICE": process.env.AUTO_VOICE === 'false',
  "AUTO_STICKER": process.env.AUTO_STICKER === 'false',
  "AUTO_REPLY": process.env.AUTO_REPLY === 'false',
  "AUTO_REACT": process.env.AUTO_REACT === 'false',
  "WELCOME": process.env.WELCOME === 'false',
  "ANTI_BAD": process.env.ANTI_BAD === 'true',
  "ANTI_LINK": process.env.ANTI_LINK === 'true',
  "ANTI_GROUP_LINK": process.env.ANTI_GROUP_LINK === 'true',
  "ANTI_DELETE": process.env.ANTI_DELETE === 'true',
  "ANTI_VIEW_ONCE": process.env.ANTI_VIEW_ONCE === 'true',
  "ANTI_BOT": process.env.ANTI_BOT === 'true',
  "PREMIUM_USERS": process.env.PREMIUM_USERS || "",
  "COUNTRY_BLOCK": process.env.COUNTRY_BLOCK === 'false',
  "COUNTRY_BLOCK_CODE": process.env.COUNTRY_BLOCK_CODE || "",
  "EMOJI": process.env.EMOJI || "🙄",
  "AUTO_TYPING": process.env.AUTO_TYPING === 'false'
};
