const Discord = require("discord.js");
const ms = require("ms");

module.exports = {
    name: "tempmute",
    category: "moderátor",
    descriptoin: "Más felhasználó ideiglenes némítása",
    run: async (bot, message, args) => {
  
      const prefix = "?"



  let tomute = message.guild.member(message.mentions.users.first() || message.guild.member(args[0]));
  if(!tomute) return message.reply("Nem találom a felhasználót!");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Nem tudom ideiglenesen némítani a felhasználót!")
  let muterole = "857879718371000340"

  if(!muterole){
      try{
          muterole = await message.guild.createRole({
              name: "muted",
              color: "#000000",
              permissions:[]
          })
          message.guild.channels.forEach(async (channel, id) => {
              await channel.overwritePermissions(muterole, {
                  SEND_MESSAGES: false,
                  ADD_REACTIONS: false
              });
          });
      }catch(e){
        console.log(e.stack);
      }
      }

    let mutetime = args[1];
    if(!mutetime) return message.reply("Nem adtál meg időt!");

    await(tomute.roles.add(muterole));
    message.reply(`<@${tomute.id}> ideiglenesen némítva lett ennyi időre: ${ms(ms(mutetime))}`)

    setTimeout(function(){
      tomute.roles.remove(muterole);
      message.channel.send(`<@${tomute.id}> ideiglenes némítása fel lett oldva!`);
    }, ms(mutetime));



}
}
module.exports.help = {
    name: "tempmute"
}

