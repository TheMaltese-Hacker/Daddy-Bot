const { MessageEmbed } = require("discord.js");
const bot = require("discord.js");

module.exports = {
    name: "help",
    description: "Help Command",
    usage: "<input>",
    run: (client, message, args) => {
        const reaction = "⛏️"
        message.channel.send('<@' + message.author.id + '> sent u a DM regarding all the commands I provide')


            const embed = new MessageEmbed()
                
                .setTitle(`${message.author.tag} These Are The Commands You Can Use`)
                .addFields(
                    { name: 'dad calc', value: 'Usage -> dad calc <number +,/,x,- number>' },
                    { name: 'dad covid', value: 'Usage -> dad covid <country>', inline: false },
                    { name: 'dad joke', value: 'Usage -> dad joke', inline: false },
                    { name: 'dad kill', value: 'Usage -> dad kill <@target>', inline: false },
                    { name: 'dad meme', value: 'Usage -> dad meme', inline: false },
                    { name: 'dad slap', value: 'Usage -> dad slap <@target>', inline: false },
                    { name: 'dad sneeze', value: 'Usage -> dad sneeze', inline: false },
                    { name: 'dad weather', value: 'Usage -> dad weather <country>', inline: false },
                    { name: 'dad emojis', value: 'Usage -> dad emojis', inline: false },
                    { name: '-suggest', value: 'Usage -> -suggest <discussion>', inline: false },
                    { name: 'dad play', value: 'Usage -> dad play <song>', inline: false },
                    { name: 'dad stop', value: 'Usage -> dad stop', inline: false },
                    { name: 'dad pause', value: 'Usage -> dad pause', inline: false },
                    { name: 'WARNING', value: 'The Following Commands Are To Be Used In An NSFW Channel', inline: false },                    
                    { name: 'dad anal', value: 'Usage -> dad anal', inline: false },
                    { name: 'dad ass', value: 'Usage -> dad ass', inline: false },    
                    { name: 'dad boobs', value: 'Usage -> dad boobs', inline: false },
                    { name: 'dad hentai', value: 'Usage -> dad hentai', inline: false },
                    { name: 'dad porngif', value: 'Usage -> dad porngif', inline: false },                    
                )
                    .setFooter('Disclaimer ⏰ Do Not Include The < > In The Commands')
                    .setColor("RANDOM");

            message.author.send(embed).then(function (message) {
          message.react("👍")
          message.react("👎")
          message.react("⛏️")
          message.react("833408327701495818")
          message.react("🍉")
          message.react("💩")
          message.react("🖕")
          message.react("🇨")
          message.react("🇺")
          message.react("🇲")
          message.react("🇿")
          message.react("🇴")
          message.react("🇳")
          message.react("🇪")


          
    			})}
        }
    