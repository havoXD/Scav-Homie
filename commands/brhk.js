const config = require("./config.json")

module.exports = {
    name: 'brhk',
    cooldown: 30,
    aliases: ['brhk416', 'br416', 'brhk-416', 'brhk416a5', 'br416a5', 'brhk416 a5', 'brhka5'],
    description: 'Best Recoil build for HK 416A5.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best Recoil **HK 416A5**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%556** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/Kvzz04Kx/brhk.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 64\nVertical Recoil: 36\nHorizontal Recoil: 95**",
                    inline: true,
                },
                {
                    name: 'Notes',
                    value: "```MBUS Iron Sights, Raptor Charging Handle and\nPSG-1 Pistol Grip are only there to boost ergo.```",
                },
                {
                    name: 'Mod List',
                    value: (config.topTable + config.enhanced + config.hke1 + config.psg1 + config.mbus + config.hk20 + config.gb416 + config.mrs14 + config.wave + config.waveqd + config.casv6 + config.rk2 + config.raptor + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};