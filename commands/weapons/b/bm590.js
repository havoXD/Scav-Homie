const config = require("../../config.json")

module.exports = {
    name: 'b590',
    cooldown: 30,
    aliases: ['bm590', 'bm590a1', 'bmossberg590a1', 'bmossberg', 'bmossberg590'],
    description: 'Budget build for Mossberg 590A1',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Budget **Mossberg 590A1**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%12gb** and/or **%12gs** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/LsHB0dCD/b590.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 48\nVertical Recoil: 297\nHorizontal Recoil: 329\nAccuracy: 16.98 MOA**",
                    inline: true,
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.rb7m + config.x400 + config.ekp18 + config.shade + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};