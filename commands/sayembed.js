const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "sayembed",
    aliases: ["bc", "broadcast"],
    description: "Says your input via the bot",
    usage: "<input>",
    run: (client, message, args) => {
        message.delete();
        var serverIcon = message.guild.iconURL();

        if (!message.member.hasPermission("MANAGE_MESSAGES"))
            return message.reply("You don't have the required permissions to use this command.").then(m => m.delete(5000));

        if (args.length < 0)
            return message.reply("Nothing to say?").then(m => m.delete(5000));

            
       
            const embed = new MessageEmbed()
                .setDescription(args.slice(0).join(" "))
                .setThumbnail(serverIcon)
                .setColor("#A10505");

            message.channel.send(embed);
        
    }
}