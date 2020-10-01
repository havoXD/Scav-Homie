const config = require("../../config.json")

module.exports = {
    name: '46',
    cooldown: 30,
    aliases: ['4.6', '4.6x30mm'],
    description: 'Detailed stats of all 4.6x30 ammunition',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: '**All 4.6x30 Ammunition Table**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%b46** for a budget/best version',
            fields: [{
                    name: 'Basic Stats',
                    value: (config.all461),
                },
                {
                    name: 'Detailed Stats',
                    value: (config.all462),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};