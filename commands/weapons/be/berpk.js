const config = require("../../config.json")

module.exports = {
    name: 'berpk',
    cooldown: 30,
    aliases: ['berpk-16', 'berpk16', 'be rpk16', 'be rpk', 'be rpk-16'],
    description: 'Best Ergo build for RPK-16',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best Ergo **RPK-16**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%545** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/QxT98cCM/berpk.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 89\nVertical Recoil: 64\nHorizontal Recoil: 181**",
                    inline: true,
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.glr16s + config.rpk15 + config.dtk1 + config.fortisg + config.rk3 + config.rp1 + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};