const config = require("./config.json")

module.exports = {
    name: 'bmp7',
    cooldown: 30,
    aliases: ['bmp7a1', 'bmp7a2', 'bhkmp7', 'bhkmp7a1', 'bhkmp7a2'],
    description: 'Budget build for MP7A1/A2.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Budget **MP7**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%46** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/vZ7WS2Bw/bmp7.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 67\nVertical Recoil: 48\nHorizontal Recoil: 164**",
                    inline: true,
                },
                {
                    name: 'Notes',
                    value: "```MP7A1: Can not change foregrip.```",
                    inline: true,
                },
                {
                    name: 'Mod List',
                    value: (config.topTable + config.rk0 + config.xps30 + config.x400 + config.endTable)
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};