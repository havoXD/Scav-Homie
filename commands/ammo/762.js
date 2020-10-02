const config = require("../config.json")

module.exports = {
    name: '762',
    cooldown: 30,
    aliases: ['7.62', '7.62x39'],
    description: 'Detailed stats of all 7.62x39 ammunition',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: '**All 7.62x39 Ammunition Table**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%b762** for a budget/best version',
            fields: [{
                    name: 'Notes',
                    value: '**BP:**\nUnlocked at trader after completion of:\n"The Punisher" - Part 5.\nCrafted at __Workbench LL3__. Duration: 2h 30min\nx1 "Eagle" = x120 **BP**.',
                },
                {
                    name: 'Basic Stats',
                    value: (config.all7621),
                },
                {
                    name: '‏‏‎‏‏‎Detailed Stats',
                    value: (config.all7622),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};