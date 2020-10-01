const config = require("../../config.json")

module.exports = {
    name: 'brasval',
    cooldown: 30,
    aliases: ['brvss', 'bras val', 'br asval', 'br as val', 'brvssvintorez'],
    description: 'Best Recoil build for AS VAL/VSS',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best Recoil **AS VAL/VSS**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%939** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/vTSWGXwP/brasval.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 39\nVertical Recoil: 47\nHorizontal Recoil: 68**",
                    inline: true,
                },
                {
                    name: 'Notes',
                    value: "```VSS can not change pistol grip and stock.```",
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.asvalpg + config.hke1 + config.ekp8 + config.shade + config.TOZ6p29m + config.rk2 + config.rp1 + config.endTable) + '\n**Best Recoil AS VAL ↓↓↓**',
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};