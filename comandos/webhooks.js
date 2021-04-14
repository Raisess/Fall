
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('../config.json')
require('dotenv/config')
const web = require("../jsons/webhooks.json");
const akira = new Discord.WebhookClient(web.akira, web.akira2)
const avina = new Discord.WebhookClient(web.avina, web.avina2)
const muk = new Discord.WebhookClient(web.muk, web.muk2)
const daemon = new Discord.WebhookClient(web.daemon, web.daemon2)


function webhook(m) {
  const msg = m.content.toLowerCase()

  var cortar = m.content.slice(7)
  var cortarmuk = m.content.slice(5)
  var cortardae = m.content.slice(8)

  if (msg.startsWith(config.prefix + "akira ")) {
    m.delete({timeout: 7000})
    akira.send(cortar);
  }

  if (msg.startsWith(config.prefix + "avina ")) {
    m.delete({timeout: 7000})
    avina.send(cortar);
  }

  if (msg.startsWith(config.prefix + "muk ")) {
    m.delete({timeout: 7000})
    muk.send(cortarmuk);
  }

  if (msg.startsWith(config.prefix + "daemon ")) {
    m.delete({timeout: 7000})
    daemon.send(cortardae);
  }


}

module.exports = webhook