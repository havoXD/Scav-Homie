const config = require("../config.json")

module.exports = {
    name: '921',
    cooldown: 30,
    aliases: ['9x21', 'all921'],
    description: 'Detailed stats of all 9x21 ammunition',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: '**All 9x21 Ammunition Table**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%b921** for a budget/best version',
            fields: [{
                    name: 'Basic Stats',
                    value: (config.all9211),
                },
                {
                    name: 'Detailed Stats',
                    value: (config.all9212),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};