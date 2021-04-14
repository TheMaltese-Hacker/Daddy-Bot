const Discord = require("discord.js");
const ms = require('ms');
const fs = require('fs');
const { prefix, token } = require('./config.json');
const config = JSON.parse(fs.readFileSync("config.json", "utf-8"));
const gamedig = require('gamedig');const { re } = require("mathjs");
const color = (config.color);
const name = (config.name);
const sChannel = (config.suggestionChannel);
const SBon = (config.suggestionbot);
const suggestprefix = (config.suggestionprefix)



const bot = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
bot.commands = new Discord.Collection();


bot.on('ready', () => {
	console.log('LavaBot is Online!')
	bot.user.setPresence({
		status: 'online',
		activity: {
			name: '"dad help"',
			type: 'PLAYING',
		}
	})
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



bot.on('message', message => {
	if (message.content === "script") {
		message.reply('read #scripts channel')
	}
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
	.setDescription(args.slice(1).join(" "))
	.setColor('RED')
	let msgEmbed = await message.channel.send(reactionembed)
	msgEmbed.react(args.slice(0).join(" "))
	console.log(reactionembed)
	}

	if (cmd === "say") {

		if (message.deletable) message.delete();

		if (args.length < 0) return message.reply(`Nothing to say?`).then(m => m.delete(5000));


		const roleColor = message.guild.me.displayHexColor === "#000000" ? "#ffffff" : message.guild.me.displayHexColor;


		if (args[0].toLowerCase() === "embed") {
			const exampleEmbed = new Discord.MessageEmbed()
				.setDescription(args.slice(1).join(" "))
				.setColor(roleColor)
				.setTimestamp()
				.setImage(bot.user.displayAvatarURL)
				.setAuthor(message.author.username, message.author.displayAvatarURL);

			message.channel.send(exampleEmbed);
		} else {
			message.channel.send(args.join(" "));
		}
	}
});

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
	if (!reaction.emoji.name === '🔓'){
		await reaction.message.guild.members.cache.get(user.id).roles.remove("830454343299498044")
	}
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