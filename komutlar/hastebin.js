const hastebin = require('hastebin-gen');
exports.run = (client, msg, args) => {
	    let haste = args.slice(0).join(" ")
        let type = args.slice(1).join(" ")
        if (!args[0]) { return msg.channel.send("**:x: Hata Lütfen Hastebin Üzerinde Görülecek Metninizi Giriniz**") }
        hastebin(haste, type).then(r => {
            msg.channel.send("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n**:white_check_mark: Metniniz Hastebinde Link** > " + r);
        }).catch(console.error);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hastebin', 'script'],
  permLevel: 0
};

exports.help = {
  name: 'hyazı',
  description: 'hastebin.com script paylasir.',
  usage: 'hyazı'
};