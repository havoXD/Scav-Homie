const config = require("../../config.json")

module.exports = {
    name: '20gb',
    cooldown: 30,
    aliases: ['20gaugebuckshot', '20gbs'],
    description: 'Detailed stats of all 20/70 buckshot ammunition',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: '**All 20/70 buckshot Ammunition Table**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%b20gb** for a budget/best version',
            fields: [{
                    name: 'Basic Stats',
                    value: (config.all20gb1),
                },
                {
                    name: '‏‏‎‏‏‎Detailed Stats',
                    value: (config.all20gb2),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};