const config = require("../config.json")

module.exports = {
    name: '939',
    cooldown: 30,
    aliases: ['9x39', '9x39'],
    description: 'Detailed stats of all 9x39 ammunition',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: '**All 9x39 Ammunition Table**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%b939** for a budget/best version',
            fields: [{
                    name: 'Notes',
                    value: '**BP:**\n\nTrade with __Prapor LL4__, x1 Strike Cigarettes -> x8 **BP**\nUnlocked at trader as barter after completion of:\n"Grenadier"\nCrafted at __Workbench LL3__. Duration: 2h 39min\nx1 Military power filter + x1 "Hawk" = x80 **BP**.\n\n**SPP:**\nTrade with __Prapor LL3__, x2 Insulating tape -> x8 **SPP**\nPrapor LL4 sells **SPP** for rubles.',
                },
                {
                    name: 'Basic Stats',
                    value: (config.all9391),
                },
                {
                    name: '‏‏‎‏‏‎Detailed Stats',
                    value: (config.all9392),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};