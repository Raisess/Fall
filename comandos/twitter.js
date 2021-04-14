const config = require('../config.json')
const Twitter = require('twitter');
require('dotenv/config')
const fs = require('fs');
const request = require('request')


const apikey = process.env.apikey
const apisecretkey = process.env.apikeysecret
const acesstoken = process.env.acesstoken
const acesstokensecret = process.env.acesssecrettoken


const clienttw = new Twitter({
  consumer_key: apikey,
  consumer_secret: apisecretkey,
  access_token_key: acesstoken,
  access_token_secret: acesstokensecret,
});



function enviartweet(m) {
  const msg = m.content.toLowerCase()



  if (msg.startsWith(config.prefix + 'tweet ')) {
    m.delete({timeout: 1000})
    if (m.attachments.size < 1) {

    const tweetar = m.content.slice(7)
    clienttw.post('statuses/update', { status: tweetar + " Tweetado por: " + m.author.username }, function (error, tweet, response) {
      if (error) throw error;
      console.log(tweet);  // Tweet body.
      //console.log(response)
      m.channel.send("O seu tweet foi enviado: " + tweet.text).then(async mensagem => {
        mensagem.delete({timeout: 10000})})
      m.channel.send("https://twitter.com/BotFall1/status/" + tweet.id_str).then(async mensagem => {
        mensagem.delete({timeout: 10000})
      })

      
      // client.channels.cache.get(canal.lab).send(response)

    })


  } else {m.channel.send("Para enviar mensagens com mídia use 'tweetimg !").then(async mensagem => {
    mensagem.delete({timeout: 10000})
  })
}

  }
  if (msg.startsWith(config.prefix + 'tweetimg ')) {
    m.delete({timeout: 7000})
    if (m.attachments.size > 0) {
    const tweetar = m.content.slice(10)
 

    m.attachments.forEach(attachment => {
      // do something with the attachment
      const link = attachment.url;
      console.log(link)
  
  
      const download = (url, path, callback) => {
        request.head(url, (err, res, body) => {
          request(url)
            .pipe(fs.createWriteStream(path))
            .on('close', callback)
        })
      }
      
      const url = link
      const path = './comandos/cache/image.png'
      
      download(url, path, () => {
        console.log('✅ Done!')
      })
  
    })
      
      
      
      
      
      

      
      

      
      

    setTimeout(async () => {
        const imageData = fs.readFileSync("./comandos/cache/image.png")
      clienttw.post("media/upload", {media: imageData}, function(error, media, response) {
        if (error) {
          console.log(error)
        } else {
          const status = {
            status: tweetar + " tweetado por: " + m.author.username,
            media_ids: media.media_id_string
          }
      
          clienttw.post("statuses/update", status, function(error, tweet, response) {
            if (error) {
              console.log(error)
            } else {
              console.log("Successfully tweeted an image!")
              m.channel.send("O seu tweet foi enviado: " + tweet.text).then(async mensagem => {
                mensagem.delete({timeout: 10000})}
              )
            }
          })
        }
      })
      }, 3000)
    } else {m.channel.send("Eí você esqueceu da imagem! Para enviar um tweet sem imagens use 'tweet !").then(async mensagem => {
      mensagem.delete({timeout: 10000})}
    )}
  }

}
module.exports = enviartweet