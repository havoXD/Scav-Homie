const config = require("../../config.json")

module.exports = {
    name: 'ba57',
    cooldown: 30,
    aliases: [],
    description: 'Relevant 5.7x28 ammunition',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: '**Tier list of 5.7x28 ammo**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%a57** for detailed stats.',
            fields: [{
                name: 'Easy to understand sheet',
                value: (config.b57),
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};