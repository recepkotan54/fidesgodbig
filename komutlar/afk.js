const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send({embed: {
                author: {
                    name: "Afk",
                    icon_url: "https://cdn.discordapp.com/attachments/469843276954992662/470591640696782848/icons8-xbox-r-50.png"
                  },
                description: "**Artık Afksın (Away From Keyboard) :white_check_mark:**"
              }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['afk'],
  permLevel: 0
};

exports.help = {
  name: 'afk',
  description: 'Afk Kalırsınız.',
  usage: 'afk'
};
