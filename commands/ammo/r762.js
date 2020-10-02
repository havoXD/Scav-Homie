const config = require("../config.json")

module.exports = {
    name: 'r762',
    cooldown: 30,
    aliases: ['r7.62', '7.62x54r'],
    description: 'Detailed stats of all 7.62x51 ammunition',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: '**All 7.62x54r Ammunition Table**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%br762** for a budget/best version',
            fields: [{
                    name: 'Notes',
                    value: '**SNB:**\nCrafted at __Workbench LL2__. Duration: 1h 58min\nx1 "Hawk" = x80 **SNB**.',
                },
                {
                    name: 'Basic Stats',
                    value: (config.allr7621),
                },
                {
                    name: '‏‏‎‏‏‎Detailed Stats',
                    value: (config.allr7622),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};