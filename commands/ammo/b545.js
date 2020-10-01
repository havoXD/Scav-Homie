const config = require("../../config.json")

module.exports = {
    name: 'b545',
    cooldown: 30,
    aliases: [],
    description: 'Relevant 5.45x39 ammunition',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: '**Tier list of 5.45x39 ammo**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%545** for detailed stats.',
            fields: [{
                    name: 'Easy to understand sheet',
                    value: (config.b5451),
                },
                {
                    name: '‏‏‎ ‎',
                    value: (config.b5452),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};