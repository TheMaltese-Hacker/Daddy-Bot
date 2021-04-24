module.exports= client => {
  const channelId = "830454769150984202";
  const logchannelId = "833724020762607656";

  const MessageEmbed = require("discord.js");
  client.on("guildMemberAdd", (member) => {
    console.log(member)

    const message = `Welcome <@${member.id}> to LavaBlock SMP! Remember to react with the <#832709116861612062> channel `;
    const logmessage = `<@${member.id}> has just joined `


    const channel = member.guild.channels.cache.get(channelId);
    const logchannel = member.guild.channels.cache.get(logchannelId);
    channel.send(message)
    logchannel.send(logmessage)
    

  });
};

