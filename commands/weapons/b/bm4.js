const config = require("../../config.json")

module.exports = {
    name: 'bm4',
    cooldown: 30,
    aliases: ['bm4a1', 'btx', 'btx15', 'btx-15', 'blonestar', 'blonestar', 'blonestar tx-15', 'blonestar tx', 'blonestar tx15', 'badar', 'badar215', 'badar2-15', 'badar 2-15', 'b2-15', 'b.223', 'b223', 'bcolt', 'bcoltm4', 'bcoltm4a1', 'budgetm4'],
    description: 'Budget build for M4A1, TX-15 and ADAR.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Budget Build for **M4A1**, **TX-15** and **ADAR 2-15**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%556** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/J4yJMhWd/bm4p.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 58\nVertical Recoil: 65\nHorizontal Recoil: 178\nStats for M4A1 build**",
                    inline: true,
                },
                {
                    name: 'Notes',
                    value: "[Build is based on M4A1 Standard](https://escapefromtarkov.gamepedia.com/File:M4A1_icon.png)",
                    inline: true,
                },
                {
                    name: 'Mod List',
                    value: (config.topTable + config.moe + config.magpul + config.rk0 + config.kacris + config.pws56 + config.xps30 + config.mk12 + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};