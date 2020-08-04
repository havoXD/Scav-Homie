const config = require("./config.json")

module.exports = {
    name: '545',
    cooldown: 30,
    aliases: ['5.45', '5.45x39'],
    description: 'Detailed stats of all 5.45x39 ammunition',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: '**All 5.45x39 Ammunition Table**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%b545** for a budget/best version',
            fields: [{
                    name: 'Notes',
                    value: '**7N39:**\nCrafted at __Workbench LL3__. Duration: 2h 37min\nx1 "Kite" + x1 "Eagle" + x1 "Hawk" = x120 **7N39**\n\n**BS:**\nTrade with __Prapor LL3__. x2 Hot Rod -> x30 **BS**.\n\n**BT:**\nUnlocked at trader to buy with __money__ after completion of:\n"The Punisher" - Part 4\nTrade with __Prapor LL1__. x2 [Tushonka](https://escapefromtarkov.gamepedia.com/Can_of_delicious_beef_stew) -> x30 **BT**.\nTrade with __Prapor LL2__. x1 Dry Fuel -> x30 **BT**.\n\n**PS:**\nUnlocked at trader after completion of:\n"Delivery from the past".\n**Useful recipe**\nAt __Workbench LL2__. x80 **PS** + x1 Bolts = x240 PP.',
                },
                {
                    name: 'Basic Stats',
                    value: (config.all5451),
                },
                {
                    name: '‏‏‎ ‎',
                    value: (config.all5452),
                },
                {
                    name: 'Detailed Stats',
                    value: (config.all5453),
                },
                {
                    name: '‏‏‎ ‎',
                    value: (config.all5454),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};