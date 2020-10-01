const config = require("../../config.json")

module.exports = {
    name: 'bm700',
    cooldown: 30,
    aliases: ['bm700', 'b m700'],
    description: 'Budget build for Remington Model 700',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Budget **M700**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%n762** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/jdXjMFDd/bm700.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 22\nVertical Recoil: 126\nHorizontal Recoil: 456\nAccuracy: 0.74 MOA**",
                    inline: true,
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.m70020 + config.comp2a + config.m70030 + config.burrisff + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};