const config = require("../../config.json")

module.exports = {
    name: 'b46',
    cooldown: 30,
    aliases: [],
    description: 'Relevant 4.6x30 ammunition',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: '**Tier list of 4.6x30 ammo**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%46** for detailed stats.',
            fields: [{
                name: 'Easy to understand sheet',
                value: (config.b46),
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};