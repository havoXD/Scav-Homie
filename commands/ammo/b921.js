const config = require("../config.json")

module.exports = {
    name: 'b921',
    cooldown: 30,
    aliases: [],
    description: 'Relevant 9x21 ammunition',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: '**Tier list of 9x21 ammo**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%921** for detailed stats.',
            fields: [{
                name: 'Easy to understand sheet',
                value: (config.b921),
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};