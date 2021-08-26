const Discord = require(`discord.js`);
const Fs = require('fs');
module.exports = {
    name: "unmute",
    catgory: "moderátor",
    description: "Tag némításának feloldása",
    run: async (bot, message, args) => {
         let prefix = "?"

        if(!message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS']))
        message.channel.send("Nincs jogod használni a parancsot!");
    else {
        const user = message.mentions.users.first();
        const member = message.guild.member(user);
    
        if(member) {
            if(member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS']) && !message.member.hasPermission('ADMINISTRATOR'))
                message.channel.send("Nem tudod feloldani a tag némítását!");
            else {
                let unmutedRole = message.guild.roles.cache.get(`857879718371000340`); // itt cseréld ki arra a rang ID-re amelyikre szeretnéd

                if(unmutedRole) {
                    member.roles.remove(unmutedRole);
                    message.channel.send("A tag némítása feloldva!");
                }
                else
                    message.channel.send("A mute rang nem található.");
            }
        }
        else
            message.channel.send("Adj meg egy említést a tagról!");
        }
    }
}
