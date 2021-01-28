const config = require("../config.json")

module.exports = {
    name: '12gs',
    cooldown: 30,
    aliases: ['12gaugeslug', '12gs'],
    description: 'Detailed stats of all 12/70 slug ammunition',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: '**All 12/70 slug Ammunition Table**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%b12gs** for a budget/best version',
            fields: [{
                    name: 'Notes',
                    value: '```RIP:\nUnlocked at trader as barter after completion of: Bullshit\n Barter: x1 T-Shaped Plug -> x5 RIP\nJaeger Barter: x1 Saury -> x5 RIP\n\nAP-20:\nCrafted at Workbench LL3. Duration: 2h 28min\nx1 "Hawk" + x2 HDD = x120 AP-20.```',
                },
                {
                    name: 'Basic Stats',
                    value: (config.all12gs1),
                },
                {
                    name: '‏‏‎‏‏‎ ‎',
                    value: (config.all12gs2),
                },
                {
                    name: 'Detailed Stats',
                    value: (config.all12gs3)
                },
                {
                    name: '‏‏‎‏‏‎ ‎',
                    value: (config.all12gs4),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};