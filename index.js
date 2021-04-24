const Discord = require("discord.js");
const ms = require('ms');
const fs = require('fs');
const bot = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const { prefix, token } = require('./config.json');
const config = JSON.parse(fs.readFileSync("config.json", "utf-8"));
const gamedig = require('gamedig');
const { re } = require("mathjs");
const color = (config.color);
const name = (config.name);
const sChannel = (config.suggestionChannel);
const SBon = (config.suggestionbot);
const suggestprefix = (config.suggestionprefix);
require('./html.js');
const welcome = require("./commands/welcome");
const channelId = "830454769150984202";
const DisTube = require("distube")
bot.distube = new DisTube(bot, { searchSongs: false, emitNewSongOnly: true });
bot.distube
    .on("playSong", (message, queue, song) => message.channel.send(
        `Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}`
	))
	.on("addSong", (message, queue, song) => message.channel.send(
        `Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`
    ))





bot.commands = new Discord.Collection();


bot.on('ready', () => {
	console.log('LavaBot is Online!')
   
   welcome(bot);

  



  	bot.user.setPresence({
		status: 'online',
		activity: {
			name: '"dad help"',
			type: 'PLAYING',
		}
	})
})




bot.on('message', message => {
  if (message.content === "cum") {
    if (message.channel.id === "834078979983409222") {
          message.react("🇨")
          message.react("🇺")
          message.react("🇲")
          message.react("🇿")
          message.react("🇴")
          message.react("🇳")
          message.react("🇪")
  }
  else message.channel.send(`<@${message.author.id}> You Can Say This Word In <#834078979983409222> channel`)
  }
  }
)

bot.on("message", message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
	  const cmd = args.shift().toLowerCase();
    if (cmd === "serverinfo") {
      message.react("👍")
      message.channel.send(`<@${message.author.id}> I sent you a message regarding the server details`)
      const serverembed = new Discord.MessageEmbed()
      .setTitle("Server Info")
      .addFields(
      { name: 'Server IP', value: 'lavablocksmp.ddns.net:25584' },
      { name: 'Dynmap URL', value: 'lavablocksmp.ddns.net:8192' }
      )
      message.author.send(serverembed)
}})



bot.on("message", message => {
  let CreamerRole = message.member.roles.cache.find(r => r.name === "Creamers")
    if (message.content === "creamdaddy") {
    if (CreamerRole) {
    const embedcream = new Discord.MessageEmbed()
    .setTitle("Someone Creamed On Me")
    .setDescription(`<@${message.author.id}> Fuckin Creamed On Me`)
    .setFooter("Ahhhhhhhhh")

    const embedcream2 = new Discord.MessageEmbed()
    .setTitle('DADDY ITS EXPLODING')
    .setDescription('LOOK AT THE CREAM')

    message.channel.send(embedcream)
    message.channel.send(embedcream2)
    }
    if (!CreamerRole) {
    const returnembed = new Discord.MessageEmbed()
    .setTitle('No Access')
    .setDescription(`<@${message.author.id}> You do not have Access To This Command, React To The Creamers Reaction Role At <#832709116861612062>`)
    message.channel.send(returnembed)
    }
}})

bot.on('message', message => {
  if (message.content === "liba") {
    if (message.channel.id === "834078979983409222") {
        message.react("🇨")
        message.react("🇷")
        message.react("🇪")
        message.react("🇦")
        message.react("🇲")
    }
  else message.channel.send(`${message.author.tag} You Can Say This Word In #spam channel`)
  }
})


bot.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'pingme') {
		message.channel.send('Pong.');
	} else if (command === 'beep') {
		message.channel.send('Boop.');
	} else if (command === 'me') {
		message.channel.send('No you');
	}


	// other commands...
});


bot.on("message", message => {
	if (message.author.bot) return;
	if (!message.guild) return;
	
	if(message.content.indexOf(prefix) !== 0) return;
  if (message.length >= 1999) {
  return message.channel.send({embed: {
				  color: 16734039,
				  description: "I can't send message longer than 2000 characters :cry:"
			  }})
  }

	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
  

	try {
	  let commandFile = require(`./commands/${command}.js`);
		if(commandFile.length <= 0){
	  return console.log("Couldn't find any commands in /commands/ directory!");
	  }
	  commandFile.run(bot, message, args);
	} catch (err) {
	  console.log(err);

	}
  });
  
  bot.on('message', message=> {
	   if (message.mentions.has(bot.user.id)) {
	   if (message.author.bot) return;
	   if (!message.guild) return;
	   
	  return message.channel.send({embed: {
		  color: 16734039,
		  description: "Hey! I can only respond to message with my prefix (" + `${prefix}` + ")"
		  }})
  }
  });


  // set message listener 



bot.on('message', message => {

	if (message.content === 'Rules') {

		const embed = new Discord.MessageEmbed()

			.setTitle('Read Rules')
			.setColor(0xff0000)
			.setDescription('1. No NSFW, 2. No Capitalist Bullshit, 3. No Scamming, 4. Dont Beg For ranks, 5. Dont re-create the Cuban missile crisis, 6. Dont Be Gay')

		message.channel.send(embed)
	}
});

bot.on('message', message => {

	if (message.content === 'what is my avatar') {

		message.reply(message.author.displayAvatarURL());
	}
});





  bot.on("message", message => {

  let ScriptShare = message.member.roles.cache.find(r => r.name === "Scripts")
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
	  const cmd = args.shift().toLowerCase();
    if (cmd === "scriptsend") {
      message.delete()
     const channelscript = bot.channels.cache.find(channel => channel.id === "785175965894443049");
      if (ScriptShare) {
      const embedscript = new Discord.MessageEmbed()
      .setTitle(`${message.author.tag} Wants To Share A Script`)
      .setDescription(args.slice(0).join(" "))

  channelscript.send(embedscript)
  console.log(message)
}
if (!ScriptShare) {
  const embednoscript = new Discord.MessageEmbed()
  .setTitle('Access Denied')
  .setDescription(`<@${message.author.id}> You do not have Access To This Command, React To The Script Reaction Role At <#834441996797870122>`)
  message.reply(embednoscript)
} 
}})

bot.on("message", message => {
  	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	  const cmd = args.shift().toLowerCase();
    if (cmd === "json2embed") {
    const targetChannel = message.mentions.channels.first()
    if (!targetChannel) {
      message.reply('Please specify a channel to send the embed in')
      return
    }

    // removes the channel mention
    args.shift()

    try {
      // get the JSON data
      const json = JSON.parse(args.join(' '))
      const { text = '' } = json

      // send the embed
      targetChannel.send(text, {
        embed: json,
      })
    } catch (error) {
      message.reply(`Invalid JSON ${error.message}`)
    }}
})

bot.on('message', message => {
  if (message.content === "ben") {
    message.channel.send('https://cdn.discordapp.com/attachments/830768759672930344/831787631452880896/bb_2.png')
   }  
})
 bot.on('message', message => {
   if (message.content === "bb") {
   if (message.member.hasPermission("ADMINISTRATOR")) {
     message.channel.send('https://danielsblog296.files.wordpress.com/2021/04/bb.png')
   }
     if (!message.member.hasPermission("ADMINISTRATOR")) {
       message.channel.send('You Do Not Have Permission To Use This Command')
     }
   
   }
 })






bot.on("guildMemberRemove", member => {
  const leavechannel = "830454769150984202";
  const welcomeChannel = member.guild.channels.cache.get(leavechannel)
  const logchannel = "833724020762607656";
  const logsender = member.guild.channels.cache.get(logchannel)
  const welcomeembed = new Discord.MessageEmbed()
  .setThumbnail(`${member.displayAvatarURL}`)
  .setDescription(`Oh no, it seems like ${member} has left`);
  welcomeChannel.send(welcomeembed)
 logsender.send (`${member} has left the server`)
})


bot.on('message', message => {
	let args = message.content.substring(prefix.length).split(" ");

	switch (args[0]) {
		case 'mute':
			var person = message.guild.member(message.mentions.users.first() || message.guild.members.cache.find(args[1]));
			if (!person) return message.reply("404 User Not Found" + person)

			let mainrole = message.guild.roles.cache.find(role => role.name === "[MR] Member");
			let role = message.guild.roles.cache.find(role => role.name === "[BD] Blacklisted");


			if (!role) return message.reply("Couldn't find the mute role.")


			let time = args[2];
			if (!time) {
				return message.reply("You didnt specify a time!");
			}

			person.roles.remove(mainrole.id)
			person.roles.add(role.id);


			message.channel.send(`@${person.user.tag} has now been muted for ${ms(ms(time))}`)

			setTimeout(function () {

				person.roles.add(mainrole.id)
				person.roles.remove(role.id);
				console.log(role.id)
				message.channel.send(`@${person.user.tag} has been unmuted.`)
			}, ms(time));



			break;
	}


});





bot.on("message", async message => {



	if (message.author.bot) return;
	if (!message.guild) return;
	if (!message.content.startsWith(prefix)) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const cmd = args.shift().toLowerCase();

	if (cmd === "ping") {

		const msg = await message.channel.send(`🏓 Pinging....`);


		msg.edit(`🏓 Pong!\nLatency is ${Math.floor(msg.createdTimestap - message.createdTimestap)}ms\nAPI Latency is ${Math.round(bot.ping)}ms`);
	}

	if (cmd === "reactm")  {
	var reactionembed = new Discord.MessageEmbed()
	.setTitle('Reaction Roles')
	.setDescription(args.slice(0).join(" "))
	.setColor('RED')
	let msgEmbed = await message.channel.send(reactionembed)
	msgEmbed.react("🔓")
	console.log(reactionembed)
	}
})
bot.on('message', function (message) {
	if (message.content == "bot:clear") {
		if (message.member.hasPermission("CHANGE_NICKNAME")) {
			message.channel.messages.fetch()
				.then(function (list) {
					message.channel.bulkDelete(list);
				}, function (err) { message.channel.send("ERROR: ERROR CLEARING CHANNEL.") })
		}
	}

});

bot.on('message', async message => {

	let blacklisted = ['-bot:adminmute', 'bot:ban', 'bot:kick', '_user-info'];

	let foundInText = false;
	for (var i in blacklisted) {
		if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
	}

	if (foundInText) {
		message.delete();
	}

	if (message.author.bot) return;

	if (message.channel.type !== 'text') {

	}
})

bot.on('message', message => {

	if (!message.guild) return;



	if (message.content.startsWith('bot:kick')) {

		const user = message.mentions.users.first();
		if (user) {
			const member = message.guild.members.resolve(user);
			if (member) {
				member
					.kick('Optional reason that will display in the audit logs')
					.then(() => {
						message.reply(`Successfully kicked ${user.tag}`);
					})
					.catch(err => {

						message.reply('I was unable to kick the member');

						console.error(err);
					});
			} else {

				message.reply("That user isn't in this guild!");
			}

		} else {
			message.reply("You didn't mention the user to kick!");
		}
	}
});



bot.on('message', message => {

	if (!message.guild) return;

	if (message.content.startsWith('bot:ban')) {
		const user = message.mentions.users.first();
		if (user) {
			const member = message.guild.members.resolve(user);
			if (member) {
				member
					.ban({
						reason: 'They were bad!',
					})
					.then(() => {
						message.reply(`Successfully banned ${user.tag}`);
					})
					.catch(err => {
						message.reply('I was unable to ban the member');
						console.error(err);
					});
			} else {
				message.reply("That user isn't in this guild!");
			}
		} else {
			message.reply("You didn't mention the user to ban!");
		}
	}
});

bot.on("messageReactionAdd", async (reaction, user) => {
	if (reaction.message.partial) await reaction.message.fetch();
	if (reaction.partial) await reaction.fetch();

	if (user.bot) return;
	if (!reaction.message.guild) return;

	if (reaction.message.channel.id === "830455599594340373") {
		if (reaction.emoji.name === '🔓'){
			await reaction.message.guild.members.cache.get(user.id).roles.add("830454343299498044")
		}
	}
  	if (reaction.message.channel.id === "832709116861612062") {
		if (reaction.emoji.name === '⛏️'){
			await reaction.message.guild.members.cache.get(user.id).roles.add("833406398825234442")
		}
	}
    	if (reaction.message.channel.id === "832709116861612062") {
		if (reaction.emoji.name === '🔓'){
			await reaction.message.guild.members.cache.get(user.id).roles.add("835106787819520002")
    }}
    if (reaction.message.channel.id === "834441996797870122") {
		if (reaction.emoji.name === '🔓'){
		await reaction.message.guild.members.cache.get(user.id).roles.add("835194967546265650")
    }}
})

bot.on("messageReactionRemove", async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch();
	if (reaction.partial) await reaction.fetch();

	if (user.bot) return;
	if (reaction.message.guild) return;

    if (reaction.message.channel.id === "832709116861612062") {
    if (reaction.emoji.name === '🔓') {
		await reaction.message.guild.members.cache.get(user.id).roles.remove("830454343299498044")
	}}
})


bot.on("message", message => {
    if (!message.content.startsWith(suggestprefix)) return;
    let args = message.content.substring(suggestprefix.length).split(" ")

    if (args[0] === "suggest") {
        suggest(message, args)
    }
    else if (args[0] === "help") {
        help(message, args)
    }
    else if (args[0] === "restart") {
        restart(message, args)
    }
    function restart(message, args) {
        if (!message.member.hasPermission('MANAGE_GUILD')) {
        message.channel.send("You do not have permission to restart the bot!")
        }
        else{
        let embed = new Discord.MessageEmbed()
            .setColor(color)
            .setTitle(name)
            .setDescription("**Restarting...**")
            .setFooter(message.author.tag, message.author.avatarURL)
            .setTimestamp(new Date())
        return message.channel.send(embed).then(
            setTimeout(() => {
                process.exit()
            }, 500)

        );
        }

    }
    function help(message, args) {

        let embed = new Discord.MessageEmbed()
            .setColor(color)
            .setThumbnail(message.author.avatarURL)
            .setTitle(name)
            .addField(suggestprefix + "suggest <suggestion> **->**", "Makes a suggestion")
            .addField(suggestprefix + "restart **->**", "Restarts the bot")
            .setDescription("Provides the list of commands.")
            .setFooter(message.author.tag, message.author.avatarURL)
            .setTimestamp(new Date())
        return message.channel.send(embed).then(
            sentEmbed => {
                sentEmbed.react("✅");

            }

        );
    }

        function suggest(message, args) {
            if (!args[1]) message.channel.send("You need a suggestion!")
            else if (SBon == false) return message.channel.send("We are not current taking suggestions at the moment.").then(
                console.log(message.author.tag + " Has attempted to make a suggestion!"))
           else if (!args) return message.channel.send("You need to suggest something!")

            else {

                let content = args.splice(1).join(" ")

                let embed = new Discord.MessageEmbed()
                    .setColor(color)
                    .setThumbnail(message.author.avatarURL)
                    .setTitle(name)
                    .addField("**Suggestion**", content)
                    .setFooter("Made By " + message.author.tag, message.author.avatarURL)
                    .setTimestamp(new Date())
                let embedsent = new Discord.MessageEmbed()
                    .setColor(color)
                    .setTitle("👍 **SUGGESTON MADE**")
                    .setDescription(message.author + (" Has made a suggestion! Use -suggest <inputhere> to make another suggestion :strawberry:"))
                    .setFooter(message.author.tag, message.author.avatarURL)
                    .setTimestamp(new Date())
                return bot.channels.cache.get(sChannel).send(embed).then(sentEmbed => {
                    sentEmbed.react("🔼").then(
                        setTimeout(() => {
                            (message.delete({ timeout: 6000 })).then(sentEmbed.react("🔽")).then(message.channel.send(embedsent)), (5000)
                        }), 10000)
                })

            }

        };
});









bot.login(token);