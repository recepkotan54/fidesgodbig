const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Logo')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== '..') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor('Logomuz !')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('Fides God Bot :tm:')
		.setImage(`https://cdn.discordapp.com/attachments/469843276954992662/470940729624100884/JPEG_20180723_094842.jpg`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'botlogo',
  description: 'Logomuzu Görürsünüz',
  usage: 'botlogo'
};
