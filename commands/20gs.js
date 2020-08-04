const config = require("./config.json")

module.exports = {
    name: '20gs',
    cooldown: 30,
    aliases: ['20gaugeslug', '20gs'],
    description: 'Detailed stats of all 20/70 slug ammunition',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: '**All 20/70 slug Ammunition Table**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%b20gs** for a budget/best version',
            fields: [{
                    name: 'Basic Stats',
                    value: (config.all20gs1),
                },
                {
                    name: '‏‏‎‏‏‎Detailed Stats',
                    value: (config.all20gs2),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};