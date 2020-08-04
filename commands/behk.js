const config = require("./config.json")
module.exports = {
    name: 'behk',
    cooldown: 30,
    aliases: ['behk416', 'be416', 'behk-416', 'behk416a5', 'be416a5', 'behk416 a5', 'behka5'],
    description: 'Best Ergo build for HK 416A5.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best Ergo **HK 416A5**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%556** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/NfTwQrzg/behk.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 100\nVertical Recoil: 92\nHorizontal Recoil: 244**",
                    inline: true,
                },
                {
                    name: 'Mod List',
                    value: (config.topTable + config.troym7 + config.psg1 + config.battle + config.hk10x6 + config.midwest9 + config.mlok4 + config.fortisg + config.vp09 + config.gb416 + config.raptor + config.ncstar + config.pk06 + config.mbus + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};