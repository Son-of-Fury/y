const { MessageEmbed } = require('discord.js');
const { parseDur } = require('../../functions');

module.exports = {
    name: 'uptime',
    description: 'Megmondja mennyi ideje van online a bot.',
    category: 'Info',
    aliases: [ 'ontime' ],
    usage: 'uptime',
    userperms: [],
    botperms: [],
    run: async (client, message, args) => {
        const duration = parseDur(client.uptime);
        message.channel.send('⌛ Betöltés...').then((msg) => {
            const pEmbed = new MessageEmbed()
                .setTitle('🟢 Online')
                .setColor('GREEN')
                .setDescription(`A bot online ennyi ideje: **${duration}**`,);
            msg.edit(pEmbed);
        });
    },
};