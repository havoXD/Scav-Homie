const config = require("../../config.json")

module.exports = {
    name: 'br590',
    cooldown: 30,
    aliases: ['brm590', 'brm590a1', 'brmossberg590a1', 'brmossberg', 'brmossberg590'],
    description: 'Best recoil build for Mossberg 590A1',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best Recoil **Mossberg 590A1**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%12gb** and/or **%12gs** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/jjZ6p8Bb/br590.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 58\nVertical Recoil: 214\nHorizontal Recoil: 238\nAccuracy: 44.69 MOA**",
                    inline: true,
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.sga590 + config.rb7m + config.xps30 + config.hg590 + config.mlok4 + config.rk2 + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};