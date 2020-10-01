const config = require("../../config.json")

module.exports = {
    name: 'b127',
    cooldown: 30,
    aliases: [],
    description: 'Relevant 12.7x55 ammunition',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: '**Tier list of 12.7x55 ammo**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%127** for detailed stats.',
            fields: [{
                name: 'Easy to understand sheet',
                value: (config.b127),
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};