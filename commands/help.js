const { MessageEmbed } = require("discord.js");
const bot = require("discord.js");

module.exports = {
    name: "help",
    description: "Help Command",
    usage: "<input>",
    run: (client, message, args) => {
        

        message.channel.send('<@' + message.author.id + '> Triggered The "dad help" Command')

            const embed = new MessageEmbed()
                .setTitle(`Commands You Can Use With <${bot.id}>`)
                .setDescription('Commands You Can Use Are')
                .addFields(
                    { name: 'dad calc', value: 'Usage -> dad calc <number +,/,x,- number>' },
                    { name: 'dad covid', value: 'Usage -> dad covid <country>', inline: false },
                    { name: 'dad joke', value: 'Usage -> dad joke', inline: false },
                    { name: 'dad kill', value: 'Usage -> dad kill <@target>', inline: false },
                    { name: 'dad meme', value: 'Usage -> dad meme', inline: false },
                    { name: 'dad slap', value: 'Usage -> dad slap <@target>', inline: false },
                    { name: 'dad sneeze', value: 'Usage -> dad sneeze', inline: false },
                    { name: 'dad weather', value: 'Usage -> dad weather <country>', inline: false },
                    { name: 'dad pig', value: 'Usage -> dad pig', inline: false },
                    { name: 'dad emojis', value: 'Usage -> dad emojis', inline: false },
                )
                    .setFooter('Disclaimer ⏰ Do Not Include The < > In The Commands')
                    .setColor("#A10505");

            message.channel.send(embed);

        }
    }