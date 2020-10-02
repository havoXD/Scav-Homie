const config = require("../config.json")

module.exports = {
    name: 'b939',
    cooldown: 30,
    aliases: [],
    description: 'Relevant 9x39 ammunition',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: '**Tier list of 9x39 ammo**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%939** for detailed stats.',
            fields: [{
                name: 'Easy to understand sheet',
                value: (config.b939),
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};