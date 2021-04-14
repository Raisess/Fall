
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('../config.json')
require('dotenv/config')
const ping = require("../jsons/pingdesnecessário.json");
const gengar = require("../jsons/gengar.json");



async function editmsg(m) {
  const msg = m.content.toLowerCase()
  if (msg.includes("random")) {
    await m.react("🇷")
    await m.react("🇦")
    await m.react("🇳")
    await m.react("🇩")
    await m.react("🇴")
    await m.react("🇲")
    await m.react("🇸")
    await m.react("<:WTFCat:823677810576982056>")
  }


}

module.exports = editmsg