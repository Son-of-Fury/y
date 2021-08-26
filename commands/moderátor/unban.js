const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'unban',
    run: async (client, message, args) => {
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('Ehhez nincs jogod!').then((m) => m.delete({ timeout: 5000 }));

        if (!args[0]) return message.channel.send('Kérlek, írd be a felhasználó id-jét!').then((m) => m.delete({ timeout: 5000 }));

        let member;

        try {
            member = await client.users.fetch(args[0]);
        } catch (e) {
            console.log(e);
            return message.channel.send('Nem találtam ilyen felhasználót!').then((m) => m.delete({ timeout: 5000 }));
        }

        const reason = args[1] ? args.slice(1).join(' ') : 'ok nélkül';

        const embed = new MessageEmbed()
            .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));

        return message.guild.fetchBans().then((bans) => {
            const user = bans.find((ban) => ban.user.id === member.id);

            if (user) {
                embed.setTitle(`Sikeresen ubannolva lett: ${user.user.tag}`)
                    .setColor('#00ff00')
                    .addField('ID:', user.user.id, true)
                    .addField('Tag:', user.user.tag, true)
                    .addField('Ok:', user.reason != null ? user.reason : 'no reason')
                    .addField('Unban oka:', reason);
                message.guild.members.unban(user.user.id, reason).then(() => message.channel.send(embed));
            } else {
                embed.setTitle(`${member.tag} felhasználó nincs kitiltva!`)
                    .setColor('#ff0000');
                message.channel.send(embed);
            }
        }).catch((e) => {
            console.log(e);
            message.channel.send('Hiba történt!');
        });
    },
};
