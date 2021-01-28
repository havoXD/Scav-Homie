const config = require("../config.json")

module.exports = {
    name: '919',
    cooldown: 30,
    aliases: ['9x19', 'all919'],
    description: 'Detailed stats of all 9x19 ammunition',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: '**All 9x19 Ammunition Table**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%b919** for a budget/best version',
            fields: [{
                    name: 'Notes',
                    value: '```9x19 RIP:\nonly available as barter at both traders but at Skier only after completion of the quest "Setup".\n\nSkier Barter: 2x Chainlets -> 20x RIP\nJaeger Barter: 1x Aquamari -> 20x RIP\nCrafted at Workbench LL3. Duration: 2h 05min\nx1 "Hawk" + x4 Wires = x180 RIP.\n\n9x19 7N31\nCrafted at Workbench LL3. Duration: 1h 56min\nx1 "Eagle" + x1 "Kite" + x1 Nails + x100 9x19 Pst gzh = x100 7N31.\n\n9x19 AP 6.3\nCrafted at Workbench LL2. Duration: 1h 29min\nx1 "Hawk" + x100 9x19 Pst gzh = x100 AP 6.3.```',
                },
                {
                    name: 'Basic Stats',
                    value: (config.all9191),
                },
                {
                    name: 'Detailed Stats',
                    value: (config.all9192),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};