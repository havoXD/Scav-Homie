const config = require("../config.json")

module.exports = {
    name: '12gb',
    cooldown: 30,
    aliases: ['12gaugebuckshot', '12gbs'],
    description: 'Detailed stats of all 12/70 buckshot ammunition',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: '**All 12/70 buckshot Ammunition Table**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%b12gb** for a budget/best version',
            fields: [{
                    name: 'Notes',
                    value: '```8.5mm:\nCrafted at Workbench LL1. Duration: 1h 31min\nx1 "Kite" + x1 Matches = x120 8.5mm.```',
                },
                {
                    name: 'Basic Stats',
                    value: (config.all12gb1),
                },
                {
                    name: '‏‏‎‏‏‎Detailed Stats',
                    value: (config.all12gb2),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};