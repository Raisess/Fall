const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('../config.json')
require('dotenv/config')

function deletar(m){ 
    const msg = m.content.toLowerCase()
if (msg.startsWith(config.prefix + "delete ")) {
  const del =  m.content.slice(8)
    m.channel.bulkDelete(del).catch(console.error)
    .then(m.channel.send(del + " mensagens deletadas").then(async mensagem => {
        mensagem.delete({ timeout: 5000 })
    })
    
    )}

}

module.exports = deletar