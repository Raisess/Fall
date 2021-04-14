
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('../config.json')
require('dotenv/config')
const ping = require("../jsons/pingdesnecessário.json");
const gengar = require("../jsons/gengar.json");



function editmsg(m){
  const msg = m.content.toLowerCase()
  

  
  if (msg === config.prefix + "ping") {
    m.delete({timeout: 7000})
     m.channel.send("Calculando ping").then(async editarmsg => {
      await editarmsg.edit(ping.a)
      await editarmsg.edit(ping.b)
      await editarmsg.edit(ping.c)
      await editarmsg.edit(ping.d)
      await editarmsg.edit(ping.e)
      await editarmsg.edit(ping.f)
      await editarmsg.edit(ping.g)
      await editarmsg.edit(ping.h)
      await editarmsg.edit(ping.i)
      await editarmsg.edit(ping.j)
      await editarmsg.edit(ping.k)
      await editarmsg.edit(ping.m)
      await editarmsg.edit(ping.n)
      await editarmsg.edit(ping.o)
      await editarmsg.edit(ping.p)
      await editarmsg.edit(ping.q)
      await editarmsg.edit(ping.r)
      await editarmsg.edit("A Latência do bot é de: " + client.ws.ping + "ms")
    }).then(async mensagem => {
      mensagem.delete({ timeout: 10000 })
    })

  }
  //------------------------------------//

  //----------briga do gengar-----------//
  if (msg === config.prefix + "gengar") {
    m.delete({timeout: 7000})
     m.channel.send(gengar.a).then(async editargengar => {

      await editargengar.edit(gengar.b)
      await editargengar.edit(gengar.c)
      await editargengar.edit(gengar.d)
      await editargengar.edit(gengar.e)
      await editargengar.edit(gengar.f)
      await editargengar.edit(gengar.g)
      await editargengar.edit(gengar.h)
      await editargengar.edit(gengar.i)
      await editargengar.edit(gengar.j)
      await editargengar.edit(gengar.k)
      await editargengar.edit(gengar.l)
      await editargengar.edit(gengar.m)
      await editargengar.edit(gengar.n)
      await editargengar.edit(gengar.o)
      await editargengar.edit(gengar.p)
      await editargengar.edit(gengar.q)
      await editargengar.edit(gengar.r)
      await editargengar.edit(gengar.s)
      await editargengar.edit(gengar.t)
      await editargengar.edit(gengar.u)
      await editargengar.edit(gengar.v)
      await editargengar.edit(gengar.w)
    }).then(async mensagem => {
      mensagem.delete({ timeout: 10000 })
    })

  }


}

module.exports = editmsg