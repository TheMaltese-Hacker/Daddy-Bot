const discord = require('discord.js');
const { MessageEmbed } = require("discord.js")
const superagent = require('superagent')
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

exports.run = async (client, message, args) => {
  if (message.channel.nsfw === true) {
const image = await nsfw.boobs();
const embed = new MessageEmbed()
    .setTitle(`Boobs Image`)
    .setColor("RANDOM")
    .setImage(image);
message.channel.send(embed);
  } else {
    const pussymeat = new MessageEmbed()
    .setTitle('⛔ Access Denied ⛔')
    .setDescription(`${message.author.tag} You Can't Use This Command Here. Kindly Go In The <#839514701661995078> channel`)
    message.channel.send(pussymeat)
  }
};