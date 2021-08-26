const Discord = require("discord.js");
module.exports = {
    name: "hack",
    category: "fun",
    description: "meghackel valakit",
    run: async (bot, message, args) => {
        let prefix = "?"


    //felhasználó lékérése
    const hack_usr = message.mentions.users.first();
    //ha nincs felhasználó
  if(!hack_usr){
    return message.reply('adj meg egy felhasználót, akit meg tudok hackelni!')
  }
  //felhasználó
  let Member =
  message.mentions.members.first() ||
  message.guild.members.cache.get(args[0]) ||
  message.member;
  
  //embedek
  
   const embed_kezdes = new Discord.MessageEmbed().setDescription('A hack előkészül!');
   consthacked = new Discord.MessageEmbed().setDescription('HACKELÉS.')
   consthacked2 = new Discord.MessageEmbed().setDescription('HACKELÉS..')
   consthacked3 = new Discord.MessageEmbed().setDescription('HACKELÉS...')
    const10 = new Discord.MessageEmbed().setDescription('HACKELÉS.\n\nA hack állapota: 10%');
   const20 = new Discord.MessageEmbed().setDescription('HACKELÉS..\n\nA hack állapota: 20%');
  const30 = new Discord.MessageEmbed().setDescription('HACKELÉS...\n\nA hack állapota: 30%');
  constserver = new Discord.MessageEmbed().setDescription('HACKELÉS.\n`Szerver csatlakozás: 46%`\n\nA hack állapota: 34%');
  constserver2 = new Discord.MessageEmbed().setDescription('HACKELÉS..\n`Szerver csatlakozás: 95%`\n\nA hack állapota: 39%');
  constserver3 = new Discord.MessageEmbed().setDescription('HACKELÉS...\n`Szerver csatlakozás: 100%`')
  const40 = new Discord.MessageEmbed().setDescription('HACKELÉS.\n`Szerver csatlakozás: 100%`\n\nA hack állapota: 40%');
  const50 = new Discord.MessageEmbed().setDescription('HACKELÉS..\n`Szerver csatlakozás: 100%`\n\nA hack állapota: 50%');
  constfeldolgozas = new Discord.MessageEmbed() .setTitle("HACKELÉS...\n`Szerver csatlakozás: 100%`\n**FELDOLGOZÁS:**") .setDescription('`Feldolgozás állapota: 37%`');
  constfeldolgozas2 = new Discord.MessageEmbed() .setTitle("HACKELÉS.\n`Szerver csatlakozás: 100%`\n**FELDOLGOZÁS:**") .setDescription('`Feldolgozás állapota: 74%`');
  constfeldolgozas3 = new Discord.MessageEmbed() .setTitle("HACKELÉS..\n`Szerver csatlakozás: 100%`\n**FELDOLGOZÁS:**") .setDescription('`Feldolgozás állapota: 100%, kész!`');
  constfeldolgozas4 = new Discord.MessageEmbed() .setTitle(`HACKELÉS...\nSzerver csatlakozás: 100%\n**Tag felhasználó neve:** ${hack_usr}`);
  const60 = new Discord.MessageEmbed().setDescription('HACKELÉS.\n`Szerver csatlakozás: 100%`\n\nA hack állapota: 60%');
  const70 = new Discord.MessageEmbed().setDescription('HACKELÉS..\n`Szerver csatlakozás: 100%`\n\nA hack állapota: 70%');
  constconnections = new Discord.MessageEmbed().setDescription("HACKELÉS...\n`Szerver csatlakozás: 100%`\n`Feldolgozás állapota: 100%, kész!`\n`Csatlakozás ellenőrzése: 12%`\n\nA hack állapota: 72°%");
  constconnections2 = new Discord.MessageEmbed().setDescription('HACKELÉS.\n`Szerver csatlakozás: 100%`\n`Feldolgozás állapota: 100%, kész!`\n`Csatlakozás ellenőrzése: 39%`\n\nA hack állapota: 75%');
  constconnections3 = new Discord.MessageEmbed().setDescription('HACKELÉS..\n`Szerver csatlakozás: 100%`\n`Feldolgozás állapota: 100%, kész!`\n`Csatlakozás ellenőrzése: 51°%`\n\nA hack állapota: 78°%');
  constconnections4 = new Discord.MessageEmbed().setDescription('HACKELÉS...\n`Szerver csatlakozás: 100%`\n`Feldolgozás állapota: 100%, kész!`\n`Csatlakozás ellenőrzése: 86%`\n\nA hack állapota: 79%');
  constconnections5 = new Discord.MessageEmbed().setDescription('HACKELÉS.\n`Szerver csatlakozás: 100%`\n`Feldolgozás állapota: 100%, kész!`\n`Csatlakozás ellenőrzése: 100%`')
  const80 = new Discord.MessageEmbed().setDescription('HACKELÉS..\n`Szerver csatlakozás: 100%`\n`Feldolgozás állapota: 100%, kész!`\n`Csatlakozás ellenőrzése: 100%`\n\nA hack állapota: 80%');
  const90 = new Discord.MessageEmbed().setDescription('HACKELÉS...\n`Szerver csatlakozás: 100%`\n`Feldolgozás állapota: 100%, kész!`\n`Csatlakozás ellenőrzése: 100%`\n\nA hack állapota: 90%');
  const100 = new Discord.MessageEmbed().setDescription('HACKELÉS.\n`Szerver csatlakozás: 100%`\n`Feldolgozás állapota: 100%, kész!`\n`Csatlakozás ellenőrzése: 100%`\n\nA hack állapota: 100%!');
  constkesz = new Discord.MessageEmbed().setDescription('HACKELÉS EREDMÉNYE:**\nA hackelés befejeződött! Az eredmény:**\n\n\n\nA hack állapota: 100%!');
  consteredmeny = new Discord.MessageEmbed().setDescription(`HACKELÉS EREDMÉNYE:**\n\n\nA hackelés befejeződött! Az eredmény:**\n\n**TAG:** ${hack_usr.tag}\n\n**FELHASZNÁLÓNÉV:** ${hack_usr}\n\n**EMAIL-CÍM:** ${hack_usr}@gmail.com\n\n\nA hack állapota: 100%!`);
  //üzenet küldése
  message.channel.send({ embed: embed_kezdes }).then((msg) => {
      setTimeout(function () {
          msg.edit(consthacked);
          msg.edit(consthacked2);
          msg.edit(consthacked3);
          msg.edit(const10);
          msg.edit(const20);
          msg.edit(const30);
          msg.edit(constserver);
          msg.edit(constserver2);
          msg.edit(constserver3);
          msg.edit(const40);
          msg.edit(const50);
          msg.edit(constfeldolgozas);
          msg.edit(constfeldolgozas2);
          msg.edit(constfeldolgozas3);
          msg.edit(constfeldolgozas4);
          msg.edit(const60);
          msg.edit(const70);
          msg.edit(constconnections);
          msg.edit(constconnections2);
          msg.edit(constconnections3);
          msg.edit(constconnections4);
          msg.edit(constconnections5)
          msg.edit(const80);
          msg.edit(const90);
          msg.edit(const100);
          msg.edit(constkesz)
          msg.edit(consteredmeny);
      }, 5000)
  })
}
}
