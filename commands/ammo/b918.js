const config = require("../../config.json")

module.exports = {
    name: 'b918',
    cooldown: 30,
    aliases: [],
    description: 'Relevant 9x18 ammunition',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: '**Tier list of 9x18 ammo**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%918** for detailed stats.',
            fields: [{
                name: 'Easy to understand sheet',
                value: (config.b918),
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};