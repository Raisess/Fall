const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('../config.json')


function random(m) {
  const msg = m.content.toLowerCase()

  if (msg === config.prefix + "'") {
    m.channel.send("")
  }






}

module.exports = random