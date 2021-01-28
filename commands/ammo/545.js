const config = require("../config.json")

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
                    value: '```7N39:\nCrafted at Workbench LL3. Duration: 2h 37min\nx1 "Kite" + x1 "Eagle" + x1 "Hawk" = x120 **7N39**\n\nBS:\nTrade with Prapor LL3. x2 Hot Rod -> x30 BS.\n\nBT:\nUnlocked at trader to buy with MONEY after completion of:\n"The Punisher" - Part 4\nTrade with Prapor LL1. x2 [Tushonka](https://escapefromtarkov.gamepedia.com/Can_of_delicious_beef_stew) -> x30 BT.\nTrade with Prapor LL2. x1 Dry Fuel -> x30 BT.\n\nPS:\nUnlocked at trader after completion of:\n"Delivery from the past".\nUseful recipe\nAt Workbench LL2. x80 PS + x1 Bolts = x240 PP.```',
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