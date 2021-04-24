const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription("I'm in " + `<${bot.guilds.size}>` + " servers!")
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL);
    message.channel.send(embed);
}

module.exports.help = {
    name: "servers",
    description: "Display a number of servers",
    usage: "servers",
    type: "Utility"   
}