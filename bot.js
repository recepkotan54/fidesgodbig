const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

 client.on("message", msg => {
  if (msg.content.toLowerCase().match(/(http|.com|discord.gg|discordapp.com)/g) && !msg.author.bot && msg.channel.type === "text" && msg.channel.permissionsFor(msg.guild.member(client.user)).has("MANAGE_MESSAGES")) {
   msg.delete(30).then(deletedMsg => {
       deletedMsg.reply("**Kendi Emeğinle Büyüt Sunucunu.:bangbang:** ").catch(e => {
        console.error(e);
       });
     }).catch(e => {
      console.error(e);
     });
   }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Oc') {
    msg.reply('**Küfür Engellendi**');
  if (msg.author.bot) return;
  if (msg.content.toLowerCase().includes('oc')) msg.reply('**Küfür Engellendi**');
  if (msg.content.toLowerCase().includes('oruspu')) msg.reply('**Küfür Engellendi**');
  if (msg.content.toLowerCase().includes('pic')) msg.reply('**Küfür Engellendi**');
  if (msg.content.toLowerCase().includes('mk')) msg.reply('**Küfür Engellendi**');
  if (msg.content.toLowerCase().includes('anan')) msg.reply('**Küfür Engellendi**');
  if (msg.content.toLowerCase().includes('yarram')) msg.reply('**Küfür Engellendi**');
  if (msg.content.toLowerCase().includes('yarrak')) msg.reply('**Küfür Engellendi**');
  if (msg.content.toLowerCase().includes('amk')) msg.reply('**Küfür Engellendi**');
  if (msg.content.toLowerCase().includes('top')) msg.reply('**Küfür Engellendi**!);
  if (msg.content.toLowerCase().includes('piç')) msg.reply('**Küfür Engellendi**');
  if (msg.content.toLowerCase().includes('sikik')) msg.reply('**Küfür Engellendi**');
  if (msg.content.toLowerCase().includes('amcık ağızlı')) msg.reply('**Küfür Engellendi**');	  
  if (msg.content.toLowerCase().includes('aq')) msg.reply('**Küfür Engellendi**');	  
  if (msg.content.toLowerCase().includes('amk')) msg.reply('**Küfür Engellendi**');	  
  if (msg.content.toLowerCase().includes('orospu')) msg.reply('**Küfür Engellendi**');	  
  if (msg.content.toLowerCase().includes('oruspu')) msg.reply('**Küfür Engellendi**');	  
  if (msg.content.toLowerCase().includes('oç')) msg.reply('**Küfür Engellendi**');	  
  if (msg.content.toLowerCase().includes('yarrak kafalı')) msg.reply('**Küfür Engellendi**');	  
  if (msg.content.toLowerCase().includes('amcık')) msg.reply('**Küfür Engellendi**');	  
  if (msg.content.toLowerCase().includes('at siki')) msg.reply('**Küfür Engellendi**');	  
  if (msg.content.toLowerCase().includes('sikik')) msg.reply('**Küfür Engellendi**');	  
  msg.delete();
  }
});

client.on('message', msg => {
  if (msg.content === './tts') {
   msg.delete(30)
    msg.reply('**Yazı Engellendi**');
  }
})

client.on('message', msg => {
  if (msg.content === '38127947') {
   msg.delete(30)
    msg.reply('**Yazı Engellendi**');
  }
})

client.on('message', msg => {
  if (msg.content === './tts38127947') {
   msg.delete(30)
    msg.reply('**Yazı Engellendi**');
  }
})

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'günaydın') {
    msg.reply('**Günaydın!**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('**Aleyküm Selam, Hoşgeldin!**');
  }
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(' ')[0];
  command = command.slice(prefix.length);

  let args = message.content.split(' ').slice(1);

  if (command === 'tavsiye-gönder' || command === 'tavsiye') {
    let str = '<@458232153830981634>';
    let id = str.replace(/[<@!>]/g, '');
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply(`Bulduğunuz bug nedir?`);
    message.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription('**Başarılı :white_check_mark: Yapımcıma tavsiyeni bildirildim! Tavsiyede Bulunuduğun için teşekkür ederim!**'));
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('Tavsiye bilgileri;')
    .addField('Tavsiye:', mesaj, true)
    .addField('Kullanıcı adı:', message.author.tag, true)
    .addField('Kullanıcı kimliği:', message.author.id, true)
    .addField('Sunucu adı:', message.guild.name, true)
    .addField('Sunucu kimliği:', message.guild.id, true)
    client.fetchUser(id)
    .then(user => {user.send({embed})})
  }
});

client.on('message', msg => {
  if (msg.content === 'pic|oc|oç|amk|amcık|yarrak kafali|yarrak kafalı') {
   msg.delete(30)
    msg.reply('**Küfür Engellendi**');
  }
})

client.on('message', msg => {
  if (msg.content === 'sg') {
   msg.delete(30)
    msg.reply('**Küfür Engellendi**');
  }
})

client.on('message', msg => {
  if (msg.content === 'sikik') {
   msg.delete(30)
    msg.reply('**Küfür Engellendi**');
  }
})

client.on('message', msg => {
  if (msg.content === 'amına koyayım') {
   msg.delete(30)
    msg.reply('**Küfür Engellendi**');
  }
})


client.on('message', msg => {
  if (msg.content === 'amina koyayim') {
   msg.delete(30)
    msg.reply('**Küfür Engellendi**');
  }
})

client.on('message', msg => {
  if (msg.content === 'piç') {
   msg.delete(30)
    msg.reply('**Küfür Engellendi**');
  }
})

client.on('message', msg => {
  if (msg.content === 'siktir git') {
   msg.delete(30)
    msg.reply('**Küfür Engellendi**');
  }
})

client.on('message', msg => {
  if (msg.content === 'oc') {
   msg.delete(30)
    msg.reply('**Küfür Engellendi**');
  }
})

client.on('message', msg => {
  if (msg.content === 'oç') {
   msg.delete(30)
    msg.reply('**Küfür Engellendi**');
  }
})

client.on('message', msg => {
  if (msg.content === 'ananı sikeyim') {
   msg.delete(30)
    msg.reply('**Küfür Engellendi**');
  }
})

client.on('message', msg => {
  if (msg.content === 'ebeni sikeyi') {
   msg.delete(30)
    msg.reply('**Küfür Engellendi**');
  }
})

client.on('message', msg => {
  if (msg.content === 'aq') {
   msg.delete(30)
    msg.reply('**Küfür Engellendi**');
  }
})

client.on('message', msg => {
  if (msg.content === 'orospu çocuğu') {
   msg.delete(30)
    msg.reply('**Küfür Engellendi**');
  }
})

client.on('message', msg => {
  if (msg.content === 'orospu') {
   msg.delete(30)
    msg.reply('**Küfür Engellendi**');
  }
})

client.on('message', msg => {
  if (msg.content === 'amcık') {
   msg.delete(30)
    msg.reply('**Küfür Engellendi**');
  }
})

client.on('message', msg => {
  if (msg.content === 'yarrak') {
   msg.delete(30)
    msg.reply('**Küfür Engellendi**');
  }
})

client.on('message', msg => {
  if (msg.content === 'am') {
   msg.delete(30)
    msg.reply('**Küfür Engellendi**');
  }
})

client.on('message', msg => {
  if (msg.content === 'vajina') {
   msg.delete(30)
    msg.reply('**Küfür Engellendi**');
  }
})

client.on('message', msg => {
  if (msg.content === 'göt') {
   msg.delete(30)
    msg.reply('**Küfür Engellendi**');
  }
})

client.on('message', msg => {
  if (msg.content === 'sikik') {
   msg.delete(30)
    msg.reply('**Küfür Engellendi**');
  }
})

client.on('message', msg => {
  if (msg.content === 'orospu cocu') {
   msg.delete(30)
    msg.reply('**Küfür Engellendi**');
  }
})

client.on('message', msg => {
  if (msg.content === 'o.ç') {
   msg.delete(30)
    msg.reply('**Küfür Engellendi**');
  }
})

client.on('message', msg => {
  if (msg.content === 'o.c') {
   msg.delete(30)
    msg.reply('**Küfür Engellendi**');
  }
})
 
client.on('message', msg => {
  if (msg.content === 'amk') {
   msg.delete(30)
    msg.reply('**Kufur Engellendi**');
  }

});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', '💬genel-sohbet💬');
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(member.user.username, member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle('Sunucumuza Katıldı | Hoşgeldin ')
  .setTimestamp()
  channel.sendEmbed(embed);
});

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(process.env.BOT_TOKEN);
