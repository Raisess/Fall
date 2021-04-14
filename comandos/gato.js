
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('../config.json')
require('dotenv/config')
const fs = require('fs');

function gato(m) {

  //------------Gato random---------------//

  const msg = m.content.toLowerCase()

  if (msg === config.prefix + 'gato') {
    m.delete({timeout: 7000})

    const cor = Math.floor((Math.random() * 900000) + 100000);
    const numero = Math.floor((Math.random() * 41) + 1);

    const gatoEmbedrandom = new Discord.MessageEmbed()
      .setTitle(`Gatinho nº ${numero}! Pedido por: ` + m.member.nickname)
      .attachFiles([`./imgs/gatinhos/${numero}.jpg`])
      .setImage(`attachment://${numero}.jpg`)
      .setColor(`#${cor}`);














    m.channel.send(gatoEmbedrandom).then(async mensagem => {
      mensagem.delete({ timeout: 120000 })

    })
  }
  //--------------------------------------//


  //------------Escolher Gato--------------//
  if (msg.startsWith(config.prefix + 'escolher ')) {
    m.delete({timeout: 7000})

    //limpar a mensagem para o numero
    const numerogato = msg.slice(10)
    const cor = Math.floor((Math.random() * 900000) + 100000);
    if (isNaN(numerogato) === false) {

      //se o número for maior, não executar o comando.
      if (numerogato < 42) {
        const gatoEmbed = new Discord.MessageEmbed()
          .setTitle(`Gatinho nº ${numerogato}! Pedido por:` + m.member.nickname)
          .attachFiles([`./imgs/gatinhos/${numerogato}.jpg`])
          .setImage(`attachment://${numerogato}.jpg`)
          .setColor(`#${cor}`);














        m.channel.send(gatoEmbed).then(async mensagem => {
          mensagem.delete({ timeout: 120000 })
        })
      } else {
        m.channel.send(m.member.nickname + ", o número não pode ser maior que 41!").then(async mensagem => {
          mensagem.delete({ timeout: 5000 })
        })

      }
    } else {
      m.channel.send("Eí! " + m.member.nickname +` "` + numerogato + `"` + " Não é um número").then(async mensagem => {
        mensagem.delete({ timeout: 5000 })
      })
    }
  }


  if (msg === config.prefix + 'acariciar gato') {
    m.delete({timeout: 7000})
    const randomnum = Math.floor((Math.random() * 20) + 1);
    if (randomnum < 10) {
      m.channel.send("**O gato não gostou do carinho, e deu uma unhada em:** " + "**" + m.member.nickname + "**").then(async mensagem => {
        mensagem.delete({ timeout: 15000 })
      })
    }
    else if (randomnum > 15) {
      const cor = Math.floor((Math.random() * 900000) + 100000);
      const gatocarinho = new Discord.MessageEmbed()
      .setTitle("**Miauu!** " + m.member.nickname + ", o Gato realmente gostou do seu carinho!")
      .attachFiles([`./imgs/gatinhos/38.jpg`])
      .setImage(`attachment://38.jpg`)
      .setColor(`#${cor}`);




      m.channel.send(gatocarinho).then(async mensagem => {
        mensagem.delete({ timeout: 15000 })
      })
    }
    else {
      (m.channel.send("Nada ocorreu, o gato nem deu bola para " + m.member.nickname)).then(async mensagem => {
        mensagem.delete({ timeout: 15000 })
      })
    }
  }

  if (msg === config.prefix + "totaldegatinhos") {
    const dir = './imgs/gatinhos';
    //Detectar a quantidade de arquivos.
    fs.readdir(dir, (err, files) => {
      m.channel.send(files.length + " imagens de gatinhos encontradas em `./imgs/gatinhos` !").then(async mensagem => {
        mensagem.delete({ timeout: 15000 })
      })
    })
  }

  //---------------------------------------//

}

module.exports = gato