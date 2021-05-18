const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    if (!message.member.voice.channel) { 
      const embed = new Discord.MessageEmbed()
      .setTitle('Error')
      .setDescription(`<@${message.author.id}>, You Are Not In A Voice Channel`)
      .setColor("#a83232")

      message.channel.send(embed)
    }
    const music = args.join(" ");

    bot.distube.play(message, music)
}

module.exports.config = {
    name: "play",
    aliases: ['p']
}