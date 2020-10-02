const config = require("../config.json")

module.exports = {
    name: 'b20gs',
    cooldown: 30,
    aliases: [],
    description: 'Relevant 20x70 Slug ammunition',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: '**Tier list of 20x70 Slugs**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%20gs** for detailed stats.',
            fields: [{
                name: 'Easy to understand sheet',
                value: (config.b20gs),
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};