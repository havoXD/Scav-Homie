const config = require("./config.json")

module.exports = {
    name: 't762',
    cooldown: 30,
    aliases: ['76225', '7.62x25', '762x25'],
    description: 'Detailed stats of all 7.62x25 buckshot ammunition',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: '**All 7.62x25 Ammunition Table**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%bt762** for a budget/best version',
            fields: [{
                    name: 'Basic Stats',
                    value: (config.allt7621),
                },
                {
                    name: '‏‏‎‏‏‎Detailed Stats',
                    value: (config.allt7622),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};