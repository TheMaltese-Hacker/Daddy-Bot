const { KSoftClient } = require('@ksoft/api');
const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args, settings) => {
	// Retrieve a random meme
	const ksoft = new KSoftClient;
	const meme = await ksoft.images.meme();



	// Send the meme to channel
	const embed = new MessageEmbed()
		.setTitle(`${meme.post.subreddit}`)
		.setColor(16333359)
		.setURL(meme.post.link)
		.setImage(meme.url)
	message.channel.send(embed);
};

module.exports.config = {
	command: 'meme1',
	permissions: ['SEND_MESSAGES', 'EMBED_LINKS'],
};

module.exports.help = {
	name: 'meme1',
	category: 'Fun',
	description: 'Sends a random meme.',
	usage: '${PREFIX}meme',
};