//----------------------------------------------------------------------------------------------------------//
//                                           Requerimentos                                                  //
//----------------------------------------------------------------------------------------------------------//
const config = require("./config.json");
const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv/config')

const fs = require('fs');
var https = require('https');



const { Player } = require("discord-player");
const player = new Player(client);
client.player = player;
//----------------------------------------------------------------------------------------------------------//
//                                       Outros Requerimentos                                               //
//----------------------------------------------------------------------------------------------------------//
const canal = require("./jsons/canais.json");
const enviartweet = require("./comandos/twitter.js");
const playerbot = require("./comandos/player.js")
const playerV2 = require("./comandos/playerV2.js")
const gato = require("./comandos/gato.js")
const webhook = require("./comandos/webhooks.js")
const editmsg = require("./comandos/editmsg.js")
const reactions = require("./comandos/reactions.js")
const com = require("./comandos/command.js")
const random = require("./comandos/randoms.js")
const deletar = require("./comandos/deletar.js");
const giphy = require("./comandos/giphy.js");



//----------------------------------------------------------------------------------------------------------//
//                                           Tokens/chaves                                                  //
//----------------------------------------------------------------------------------------------------------//
client.login(process.env.tokendiscord);

//----------------------------------------------------------------------------------------------------------//
//                                    Mensagem de Inicialização                                             //
//----------------------------------------------------------------------------------------------------------//


client.on('ready', async () => {

  const StartEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Fall"')
	.setURL('https://github.com/Pykera/Fall')
	.setAuthor('Feito por Paique', 'https://pbs.twimg.com/profile_images/1353303228667060224/py4zHAnf_400x400.jpg', 'https://twitter.com/Paiique')
	.setDescription('✅ Bot Online! ✅')
	.setThumbnail('https://www.dropbox.com/s/imu5etmmyd60d89/fallimg.png?dl=1')
	.addFields(
		{ name: 'Bot em fase:', value: '⚠️ Alpha V 0.2! ⚠️' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Comandos de música:', value: '⚠️ Em parte funcionais ⚠️', inline: true },
		{ name: 'Modo Anti-Flood:', value: 'Habilitado ✅', inline: true })
	.setTimestamp()

















    client.channels.cache.get(canal.fall.lab).send(StartEmbed).then(async mensagem => {
      mensagem.delete({timeout: 120000})

  })
    client.channels.cache.get(canal.Paique.botdopaique).send(StartEmbed).then(async mensagem => {
      mensagem.delete({timeout: 120000})

  })
})

//----------------------------------------------------------------------------------------------------------//
//                                   Modulo principal do BOT                                                //
//----------------------------------------------------------------------------------------------------------//








client.on('message', async m => {

  //Não deixar o bot responder a ele mesmo, amém nunca apague isso daqui.
  if (m.author.bot) {
    return;
  }
 
// 'tweet "mensgaem" // Enviar tweets.s
enviartweet(m)

// Player do bot, multiplos comandos.
playerbot(m)
//playerV2(m)

//Webhooks.
webhook(m)

//Comandos relacionados a gato //ex: 'gato, 'escolher 'acariciar.
gato(m)

// comandos que necessitam editar mensagem, tais como 'gengar.
editmsg(m)

//comandos relacionados a reações.
reactions(m)

//Injetar codigos diretamente do chat 'com.
com(m)

//Comandos randoms totalmente inuteis, porem legais.
random(m)


//comando bulkdelete
deletar(m)

//giphy teste
giphy(m)

if (m.content === 'teste') {
m.channel.send(m.guild.id)


}


/*if (m.content.startsWith(config.prefix)) {
m.delete({timeout: 7000})
}

*/

})

