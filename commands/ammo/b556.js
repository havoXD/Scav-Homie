const config = require("../../config.json")

module.exports = {
    name: 'b556',
    cooldown: 30,
    aliases: [],
    description: 'Relevant 5.56x45 ammunition',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: '**Tier list of 5.56x45 ammo**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%556** for detailed stats.',
            fields: [{
                    name: 'Easy to understand sheet',
                    value: (config.b5561),
                },
                {
                    name: '‏‏‎ ‎',
                    value: (config.b5562),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};