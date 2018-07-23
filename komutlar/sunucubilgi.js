const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {

	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Uyarı :warning:', '`sunucubilgi` adlı komutu özel mesajlarda kullanamazsın.')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField(':clipboard:Sunucu Adı:clipboard:', message.guild.name)
    .addField(':label:Sunucu ID:label:', message.guild.id)
    .addField(':speech_balloon:Ana kanal:speech_balloon:', message.guild.defaultChannel)
    .addField(':map:Sunucu Bölgesi:map:', message.guild.region)
    .addField(':bust_in_silhouette:Üye Sayısı:bust_in_silhouette:', message.guild.memberCount)
    .addField(':crown:Sahibi:crown:', message.guild.owner + ' (' + message.guild.ownerID + ')')
    .addField(':1234:Kanal sayısı:1234:', message.guild.channels.size)
    .addField(':calendar_spiral:Oluşturulma tarihi:calendar_spiral:', message.guild.createdAt)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucu', 'sunucu bilgi', 'sbilgi'],
  permLevel: 0
};

exports.help = {
  name: 'sunucubilgi',
  description: 'Sunucu hakkında bilgi verir.',
  usage: 'sunucubilgi'
};
