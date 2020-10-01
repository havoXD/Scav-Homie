const config = require("../../config.json")

module.exports = {
    name: '366',
    cooldown: 30,
    aliases: ['.366', '366tkm', '.366tkm'],
    description: 'Detailed stats of all .366 TKM buckshot ammunition',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: '**All .366 TKM Ammunition Table**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%b366** for a budget/best version',
            fields: [{
                    name: 'Notes',
                    value: '**AP:**\nCrafted at __Workbench LL2__. Duration: 1h 43min\nx50 SP-6 + x100 7.62x39 PS = x100 **AP**',
                }, {
                    name: 'Stats',
                    value: (config.all3661),
                },
                {
                    name: 'Stats',
                    value: (config.all3662),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};