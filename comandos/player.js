const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('../config.json')
const { Player } = require("discord-player");
const player = new Player(client);
client.player = player;
const filters = require('discord-player').Player.AudioFilters
require('dotenv/config')



function playerbot(m) {
  const msg = m.content.toLowerCase()


  //Codigo do voicechat
  const args = m.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();




  //Detectar se é uma playlist do spotify
  if (m.content.startsWith(config.prefix + "play https://open.spotify.com/playlist")) {
    m.channel.send("Playlists do Spotify podem demorar para ser processadas, dependendo do tamanho da playlist este processo pode demorar 2 minutos.").then(async mensagem => {
      mensagem.delete({ timeout: 120000 })
    })
  }

  if (msg.startsWith(config.prefix + "play ")) {
    m.delete({ timeout: 7000 })
    const procurar = m.content.slice(6)
    client.player.play(m, procurar, true)
    setTimeout(() => {
      m.channel.send(client.player.nowPlaying(m).requestedBy.username + " adcionou uma música, tocando agora: " + client.player.nowPlaying(m).title).then(async mensagem => {
        mensagem.delete({ timeout: 12000 })
      })
    }, 2000)
    }
  
  if (command === "volume") {
    m.delete({ timeout: 7000 })
    client.player.setVolume(m, args[0])
    m.channel.send("Volume em: " + args[0] + "%").then(async mensagem => {
      mensagem.delete({ timeout: 10000 })

    console.log(Object.keys(filters))



    })
  }
  if (command === "pause") {
    m.delete({ timeout: 7000 })
    client.player.pause(m, args[0])
    m.channel.send("Pausado").then(async mensagem => {
      mensagem.delete({ timeout: 10000 })
    })

  }
  if (command === "parar") {
    m.delete({ timeout: 7000 })
    client.player.stop(m, args[0])
    m.channel.send("A queue foi apagada").then(async mensagem => {
      mensagem.delete({ timeout: 10000 })
    })

  }



  if (command === "despausar") {
    m.delete({ timeout: 7000 })
    client.player.resume(m, args[0])
    m.channel.send("Despausado").then(async mensagem => {
      mensagem.delete({ timeout: 10000 })
    })

  }
  if (command === "pular") {
    m.delete({ timeout: 7000 })
    client.player.skip(m, args[0])
    m.channel.send("Você pulou a música, tocando agora: " + client.player.nowPlaying(m)).then(async mensagem => {
      mensagem.delete({ timeout: 10000 })
    })

  }
  if (command === "voltar") {
    m.delete({ timeout: 7000 })
    client.player.back(m, args[0])
    m.channel.send("Você voltou uma música." + client.player.nowPlaying(m)).then(async mensagem => {
      mensagem.delete({ timeout: 10000 })
    })

  }

  //--------------Filtros-----------------//

  if (command === "bassboost") {
    const bassBoostState = !client.player.filters.bassboost;
  
    m.delete({ timeout: 7000 });
  
    client.player.setFilters(m, {
      bassboost: bassBoostState,
      softlimiter: true
    });
  
    //client.player.setVolume(m, 10);
  
    m.channel.send(`O bassboost está ${bassBoostState ? "ativado" : "desativado"}`).then(async mensagem => {
      mensagem.delete({ timeout: 10000 })
    });
  }


if (command === "testebass") {
  console.log(player.setFilters(m, newFilters))
}

  if (command === "bassbooston") {
    m.delete({ timeout: 7000 })
    client.player.setFilters(m, {
      bassboost: true,
      softlimiter: true
    });
    client.player.setVolume(m, 10)
    m.channel.send("Atenção o bassboost está ativado ,para a sua conveniencia o som foi ajustado para 10%, o som mais alto do que isso pode acabar causando danos a o sistema auditivo, ou deixando o som estourado, o recomandável é aumentar de 5% em 5%.").then(async mensagem => {
      mensagem.delete({ timeout: 10000 })
      console.log(player.filters.bassboost)
    })
    
  }
  if (command === "bassboostoff") {
    m.delete({ timeout: 7000 })
    client.player.setFilters(m, {
      bassboost: false
    });
    m.channel.send("Bassboost Desligado").then(async mensagem => {
      mensagem.delete({ timeout: 10000 })
    })

  }
  if (command === "normalizeron") {
    m.delete({ timeout: 7000 })
    client.player.setFilters(m, {
      normalizer: true
    });
    m.channel.send("Normalizer ligado,o seu uso é experimental.").then(async mensagem => {
      mensagem.delete({ timeout: 10000 })
    })

  }
  if (command === "normalizeroff") {
    m.delete({ timeout: 7000 })
    client.player.setFilters(m, {
      normalizer: false
    });
    m.channel.send("Normalizer desligado.").then(async mensagem => {
      mensagem.delete({ timeout: 10000 })
    })

  }
  if (command === "limitador") {
    m.delete({ timeout: 7000 })
    client.player.setFilters(m, {
      softlimiter: true
    });
    m.channel.send("Limitador Ativado").then(async mensagem => {
      mensagem.delete({ timeout: 10000 })
    })

  }
  if (command === "limitadoroff") {
    m.delete({ timeout: 7000 })
    client.player.setFilters(m, {
      softlimiter: false
    });
    m.channel.send("limitador desligado").then(async mensagem => {
      mensagem.delete({ timeout: 10000 })
    })

  }
  if (command === "surround") {
    m.delete({ timeout: 7000 })
    client.player.setFilters(m, {
      surrounding: true
    });
    m.channel.send("Atenção o Surround está ativado, o seu uso pode distorcer o som.").then(async mensagem => {
      mensagem.delete({ timeout: 10000 })
    })
  }
  if (command === "surroundoff") {
    m.delete({ timeout: 7000 })
    client.player.setFilters(m, {
      surrounding: false
    });
    m.channel.send("Filtro Surround Desativado").then(async mensagem => {
      mensagem.delete({ timeout: 10000 })
    })
  }
  if (command === "treble") {
    m.delete({ timeout: 7000 })
    client.player.setFilters(m, {
      treble: true
    });
    m.channel.send("Filtro Treble Ativado").then(async mensagem => {
      mensagem.delete({ timeout: 10000 })
    })
  }
  if (command === "trebleoff") {
    m.delete({ timeout: 7000 })
    client.player.setFilters(m, {
      treble: false
    });
    m.channel.send("Filtro Treble Desativado").then(async mensagem => {
      mensagem.delete({ timeout: 10000 })
    })
  }
  if (msg === config.prefix + "sair") {
    m.delete({ timeout: 7000 })
    m.member.voice.channel.leave()
    m.channel.send("Você forçou o bot a sair (Método não recomendado, use `'parar`.)").then(async mensagem => {
      mensagem.delete({ timeout: 10000 })
    })
  }


  if (msg === config.prefix + "queue") {
    m.delete({ timeout: 7000 })
    const queue = player.getQueue(m)
    console.log(queue.tracks.queue.title)
  }




}
module.exports = playerbot