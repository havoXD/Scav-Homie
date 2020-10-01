const config = require("../../config.json")

module.exports = {
    name: 'brpk',
    cooldown: 30,
    aliases: ['brpk-16', 'brpk16', 'b rpk16', 'b rpk', 'b rpk-16'],
    description: 'Budget build for RPK-16',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Budget build **RPK-16**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%545** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/QMxcdVvn/brpk.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 67\nVertical Recoil: 58\nHorizontal Recoil: 163**",
                    inline: true,
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.moe + config.magpul + config.rpk15 + config.dtk1 + config.rk0 + config.xps30 + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};