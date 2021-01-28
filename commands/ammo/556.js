const config = require("../config.json")

module.exports = {
    name: '556',
    cooldown: 30,
    aliases: ['5.56', '5.56x45'],
    description: 'Detailed stats of all 5.56x45 ammunition',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: '**All 5.56x45 Ammunition Table**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%b556** for a budget/best version',
            fields: [{
                    name: 'Notes',
                    value: '```M995:\nCrafted at Workbench LL3. Duration: 2h 37min\nx1 "Eagle" + x1 OFZ = x140 M995\n\nM856A1:\nUnlocked at trader after completion of:\n"The Cult" - Part 1.\nCrafted at Workbench LL2. Duration: 2h\nx1 "Hawk" + x90 M855 = x180 M855A1\n\nWarmage:\nCrafted at Workbench LL3. Duration: 2h 26min\nx1 "Eagle" + x2 "Kite" = x200 Warmage\nTrade with Peacekeeper LL3. x4 D Size Battery -> x20 Warmage.\nTrade with Jaeger LL4. x5 Humpback -> x20 Warmage.```',
                },
                {
                    name: 'Basic Stats',
                    value: (config.all5561),
                },
                {
                    name: '‏‏‎ ‎',
                    value: (config.all5562),
                },
                {
                    name: '‏‏‎Detailed Stats',
                    value: (config.all5563),
                },
                {
                    name: '‏‏‎ ‎',
                    value: (config.all5564),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};