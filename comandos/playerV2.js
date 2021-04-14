const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('../config.json')
const { Player } = require("discord-player");
const player = new Player(client);
client.player = player;
const filters = require('discord-player').Player.AudioFilters
require('dotenv/config')
const canal = require("../jsons/canais.json");



function playerV2(m) {
  const msg = m.content.toLowerCase()



  if (msg.startsWith(config.prefix + "play ")) {
    m.delete({timeout: 7000})
    const procurar = m.content.slice(6)
    player.play(m, procurar, true)

    m.channel.send("Playeron").then(async mensagem => {
      console.log(mensagem.id)



    })


  }


}
module.exports = playerV2