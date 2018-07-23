exports.run = async (client, msg, args) => {
  let kufur=[
    "",
    "Amına kodumun jedayı seni",
    "Babanın annesinin amına koyayım orul orul orospu evladı",
    "Sbenin amı gibi kaşları da kara",
    "Seni anasının amında olimpiyat meşalesi yakıp 10 km kostuğumun cocuğu ",
    "Senin ananın amına mancınıkla patates atayım",
    "Senin dalağını öyle bi sikerim ki ömür boyu hıçkırırsın",
    "Ananın amına bilardo topuyla rövaşata çekerim am dolması yarrak kafalı çin orospusu seni amına kodumun çin aslanı bilyesini gibtiğimin am düdüğü",
    "Senin ananı düdüklü tencerenin arasına alıp öttüre öttüre sikerim ulan ben",
    "Ananın amını keserim cebime koyarım sıkıldıkça sikerim",
    "Ananın amına sınav yapar 2 milyon kişiyi sokarım",
    "Amına barut döker sürtünmeyle yakarım orospu evladı",
    "Seni bi sikerim bluetooh un hata verir kapsama alanın genişler.",
    "O tuşlara basan ufacık parmaklarının arasına sokar felç edene kadar siker o felç olan parmaklarını kesip organ mafyasına satarım elde ettigim gelirin bi kısmını görme engelliler vakfına bağışlar kalan kısmıda annenle çarçur eder babanın delirmesini sağlar ocağına incir ağacı diker ağacın gölgesinde teyzeni dallı budaklı sikerim senin",
    "Küfür etmek günah olum sen ne yaptıysan artık sana kızmış birisi affettir kendini beni de günaha sokçak orospu kertenkelesi",
    "Küfür ederdim ama anan çok yordu",
    "Öyle yan durup şekilli mekilli tişört giyme ananı götünden siker Erol Taş gibi kiraz ağacından kamçı yapar döverim",
  ]
     let member = msg.mentions.members.first()
   if(!member)return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (':no_entry_sign: Ya geçerli birini etiketle ya da sana sövmemi istiyosan kendini etiketle.')
}});
  if(member.id === "458232153830981634")return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (':no_entry_sign: Şşş Yapımcım Görmesin Sakın.')
}})
  if(member.id === "385276534811787266")return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`:no_entry_sign: Yapımcımın En Yakın Arkadaşına Sövemem.`)
}})
  if(member.id === "338702790346145794")return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`:no_entry_sign: Hoop! Orda Duracan Size Key Vermemizi Sağlayan Kişiye Sövemem.`)
}})
  if(member.id === client.user.id){
    msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`:no_entry_sign: Kendi Kendimemi Sövmemi İstiyon Amk`)
}})
  }
  else{
  msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`${member} ${kufur[Math.floor(Math.random() * 16)]}.`)
  }})
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
 };

exports.help = {
  name: 'söv',
  description: 'Bot Söver.',
  usage: 'söv'
 }
