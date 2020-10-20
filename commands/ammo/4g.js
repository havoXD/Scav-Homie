const config = require("../config.json")

module.exports = {
    name: '4g',
    cooldown: 30,
    aliases: ['23x75', '23x75mm', '4gauge'],
    description: 'Detailed stats of all 23x75 ammunition',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: '**All 23x75 Ammunition Table**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%b23x75** for a budget/best version',
            fields: [
                {
                    name: 'Basic Stats',
                    value: (config.all4g1),
                },
                {
                    name: '‏‏‎‏‏‎Detailed Stats',
                    value: (config.all4g2),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};