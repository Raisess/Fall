const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('../config.json')
require('dotenv/config')
const fs = require('fs');
var GphApiClient = require('giphy-js-sdk-core')
Giphyc = GphApiClient("XHklY5cOYWoL42J9ADfPkzjx4e1LuFY0")


function giphy(m) {
    const msg = m.content.toLowerCase()
    if (msg === config.prefix + "giphy") {


        Giphyc.search('gifs', {"q": "cats"})
        .then((response) => {
          response.data.forEach((gifObject) => {
            console.log(gifObject)
          })
        })
        .catch((err) => {
       
        })




        m.delete({timeout: 2000})


    }
}
module.exports = giphy