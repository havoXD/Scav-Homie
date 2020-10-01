const config = require("../../config.json")

module.exports = {
    name: 'b919',
    cooldown: 30,
    aliases: [],
    description: 'Relevant 9x19 ammunition',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: '**Tier list of 9x19 ammo**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%919** for detailed stats.',
            fields: [{
                name: 'Easy to understand sheet',
                value: (config.b919),
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};