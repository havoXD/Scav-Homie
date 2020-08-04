const config = require("./config.json")

module.exports = {
    name: 'bhk',
    cooldown: 30,
    aliases: ['bhk416', 'b416', 'bhk-416', 'bhk416a5', 'b416a5', 'bhk416 a5', 'bhka5'],
    description: 'Budget build for HK 416A5.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Budget build for **HK 416A5**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%556** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/1z1dMCm6/bhk.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 66\nVertical Recoil: 67\nHorizontal Recoil: 178**",
                    inline: true,
                },
                {
                    name: 'Notes',
                    value: "[Build is based on default HK 416A5 build](https://escapefromtarkov.gamepedia.com/HK_416A5_5.56x45_Assault_Rifle)",
                    inline: true,
                },
                {
                    name: 'Mod List',
                    value: (config.topTable + config.moe + config.magpul + config.rk0 + config.pws56 + config.xps30 + config.gb416 + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};