const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('../config.json')
const comandos = require('./jsons/comandos.json')



function com(m){
  const msg = m.content.toLowerCase()

  if (msg.startsWith(config.prefix + "com ")) {
    m.delete({timeout: 20000})
    let slicecommand;

    slicecommand = m.content.slice(5);

    eval(slicecommand).catch(console.error) 
    
  }
if (msg.startsWith(config.prefix + "ajuda")) {
  m.delete({timeout: 7000})
  const embed = new Discord.MessageEmbed()
  .setTitle(`Comandos do Fall''`)
  .setColor(5814783)
  .setTimestamp()
  .setThumbnail('')
  .setDescription(`Comandos de Ajuda.`)
  .addFields(
  { name: 'Música', value: `'música`, inline: false},
  { name: 'Twitter', value: `'twitter`, inline: false},
  { name: 'Webhooks', value: `'webhooks'`, inline: false },
  { name: 'Gatos', value: `'gatos`, inline: false },
  { name: 'Outros', value: `'outros`, inline: false },
  )
m.channel.send(embed).then(async mensagem => {
  mensagem.delete({ timeout: 20000 })
})
  
  }


  if (msg === config.prefix +'música') {
    m.delete({timeout: 7000})
    const embed = new Discord.MessageEmbed()
    .setTitle(`Comandos do Fall''`)
    .setColor(5814783)
    .setTimestamp()
    .setThumbnail('')
    .setDescription(`Comandos de Ajuda (Música).`)
    .addFields(
    { name: "'play", value: comandos.player.comando[1], inline: false},
    { name: "'volume", value: comandos.player.comando[2], inline: false},
    { name: "'pause", value: comandos.player.comando[3] , inline: false },
    { name: "'despausar", value: comandos.player.comando[4] , inline: false },
    { name: "'parar", value: comandos.player.comando[5] , inline: false },
    { name: "'pular", value: comandos.player.comando[6] , inline: false },
    { name: "'voltar", value: comandos.player.comando[7] , inline: false },
    { name: "'bassbooston", value: comandos.player.comando[8] , inline: false },
    { name: "'bassboostoff", value: comandos.player.comando[9] , inline: false },
    { name: "'surround", value: comandos.player.comando[10] , inline: false },
    { name: "'surroundoff", value: comandos.player.comando[11] , inline: false },
    { name: "'limitador", value: comandos.player.comando[12] , inline: false },
    { name: "'limitadoroff", value: comandos.player.comando[13] , inline: false },
    { name: "'treble", value: comandos.player.comando[14] , inline: false },
    { name: "'trebleoff", value: comandos.player.comando[15] , inline: false },
    { name: "'sair", value: comandos.player.comando[16] , inline: false },
    { name: "'queue", value: comandos.player.comando[17] , inline: false },
    { name: "'normalizeron", value: comandos.player.comando[18] , inline: false },
    { name: "'normalizeroff", value: comandos.player.comando[19] , inline: false },
    )
  m.channel.send(embed).then(async mensagem => {
    mensagem.delete({ timeout: 20000 })
  })
  }

  if (msg === config.prefix + "twitter") {
    m.delete({timeout: 7000})
    const embed = new Discord.MessageEmbed()
    .setTitle(`Comandos do Fall''`)
    .setColor(5814783)
    .setTimestamp()
    .setThumbnail('')
    .setDescription(`Comandos de Ajuda (Twitter).`)
    .addFields(
    { name: "'tweet", value: comandos.twitter.comando[1], inline: false},
    { name: "'tweetimg", value: comandos.twitter.comando[2], inline: false},
    )
  m.channel.send(embed).then(async mensagem => {
    mensagem.delete({ timeout: 20000 })
  })
  }
  if (msg === config.prefix + "webhooks") {
    m.delete({timeout: 7000})
    const embed = new Discord.MessageEmbed()
    .setTitle(`Comandos do Fall''`)
    .setColor(5814783)
    .setTimestamp()
    .setThumbnail('')
    .setDescription(`Comandos de Ajuda (Webhooks).`)
    .addFields(
    { name: "'akira", value: comandos.webhooks.comando[1], inline: false},
    { name: "'avina", value: comandos.webhooks.comando[2], inline: false},
    { name: "'daemon", value: comandos.webhooks.comando[3], inline: false},
    { name: "'muk", value: comandos.webhooks.comando[4], inline: false},
    )
  m.channel.send(embed).then(async mensagem => {
    mensagem.delete({ timeout: 20000 })
  })
  }
  if (msg === config.prefix + "gatos") {
    m.delete({timeout: 7000})
    const embed = new Discord.MessageEmbed()
    .setTitle(`Comandos do Fall''`)
    .setColor(5814783)
    .setTimestamp()
    .setThumbnail('')
    .setDescription(`Comandos de Ajuda (Webhooks).`)
    .addFields(
    { name: "'escolher", value: comandos.gato.comando[1], inline: false},
    { name: "'gato", value: comandos.gato.comando[2], inline: false},
    { name: "'acariciar", value: comandos.gato.comando[3], inline: false},
    )
  m.channel.send(embed).then(async mensagem => {
    mensagem.delete({ timeout: 20000 })
  })
  }
  if (msg === config.prefix + "outros") {
    m.delete({timeout: 7000})
    const embed = new Discord.MessageEmbed()
    .setTitle(`Comandos do Fall''`)
    .setColor(5814783)
    .setTimestamp()
    .setThumbnail('')
    .setDescription(`Comandos de Ajuda (Webhooks).`)
    .addFields(
    { name: "'ping", value: comandos.editmsg.comando[1], inline: false},
    { name: "'gengar", value: comandos.editmsg.comando[2], inline: false},
    )
  m.channel.send(embed).then(async mensagem => {
    mensagem.delete({ timeout: 20000 })
  })
  }


}

module.exports = com