const Discord = require("discord.js")
const Commando = require('discord.js-commando')
const axios = require('axios')

module.exports = class CatCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'meme',
      group: 'misc',
      memberName: 'cat',
      description: 'Displays a random picture of a cat',
    })
  }

  run = async (message) => {
    axios
      .get('https://api.imgflip.com/get_memes')
      .then((res) => {
        console.log('RES:', res.data[0].url)
        message.reply(res.data[0].url)
      })
      .catch((err) => {
        console.error('ERR:', err)
      })
  }
}
