const config = require("./config.json")

module.exports = {
    name: 'brmp5',
    cooldown: 30,
    aliases: ['br mp5', 'brhkmp5', 'br hk mp5', 'brhk mp5', 'br hkmp5', 'brhk-mp5', 'br hk-mp5'],
    description: 'Best Recoil build for MP5.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best Recoil **MP5**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%919** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/sXhY8GXZ/brmp5.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 63\nVertical Recoil: 25\nHorizontal Recoil: 116**",
                    inline: true,
                },
                {
                    name: 'Mod List',
                    value: (config.topTable + config.mp5sd + config.mp5sdhg + config.mp5sup + config.hka2 + config.mfihk + config.ekp18 + config.shade + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};