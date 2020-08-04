const config = require("./config.json")

module.exports = {
    name: 'bemp5',
    cooldown: 30,
    aliases: ['be mp5', 'behkmp5', 'be hk mp5', 'behk mp5', 'be hkmp5', 'behk-mp5', 'be hk-mp5'],
    description: 'Best Ergo build for MP5.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best Ergo **MP5**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%919** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/pd7QqJ2H/bemp5.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 85\nVertical Recoil: 37\nHorizontal Recoil: 173**",
                    inline: true,
                },
                {
                    name: 'Mod List',
                    value: (config.topTable + config.hx5 + config.fortisg + config.lug3 + config.hka3 + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};