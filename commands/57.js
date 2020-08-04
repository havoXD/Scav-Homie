const config = require("./config.json")

module.exports = {
    name: 'a57',
    cooldown: 30,
    aliases: ['a5.7', 'a5.7x28mm'],
    description: 'Detailed stats of all 5.7x28 ammunition',
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: '**All 5.7x28 Ammunition Table**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%b57** for a budget/best version',
            fields: [{
                    name: 'Basic Stats',
                    value: (config.all571),
                },
                {
                    name: 'Detailed Stats',
                    value: (config.all572),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};