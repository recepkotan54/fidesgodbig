const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()
  .setAuthor("Bayrağına Kurban Olayım Senin\n")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor("RANDOM")
  .setImage("https://media.giphy.com/media/26BRIlajbhPc5YMkU/giphy.gif")
  .setFooter("¦ 2018 ¦ Fides God ¦ BOT ", " ")
  /*
   * Takes a Date object, defaults to current date.
   */

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bayrak',
  description: 'Bot Alkışlar',
  usage: 'bayrak'
};
