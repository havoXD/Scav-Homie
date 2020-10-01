const config = require("../../config.json")

module.exports = {
    name: 'brrpk',
    cooldown: 30,
    aliases: ['brrpk-16', 'brrpk16', 'br rpk16', 'br rpk', 'br rpk-16'],
    description: 'Best Recoil build for RPK-16',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best Recoil **RPK-16**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%545** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/PNsqpFJ5/brrpk.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 60\nVertical Recoil: 39\nHorizontal Recoil: 111**",
                    inline: true,
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.hke1 + config.rpk22 + config.pws45 + config.rk2 + config.rk3 + config.rp1 + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};