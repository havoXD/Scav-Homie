const config = require("./config.json")

module.exports = {
    name: 'br762',
    cooldown: 30,
    aliases: [],
    description: 'Relevant 7.62x54r ammunition',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: '**Tier list of 7.62x54r ammo**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%r762** for detailed stats.',
            fields: [{
                name: 'Easy to understand sheet',
                value: (config.br762),
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};