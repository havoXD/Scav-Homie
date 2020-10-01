const config = require("../../config.json")

module.exports = {
    name: 'bmp5',
    cooldown: 30,
    aliases: ['b mp5', 'bhkmp5', 'b hk mp5', 'bhk mp5', 'b hkmp5', 'bhk-mp5', 'b hk-mp5'],
    description: 'Budget build for MP5.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Budget **MP5**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%919** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/WzcGPpFY/bmp5.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 65\nVertical Recoil: 30\nHorizontal Recoil: 139**",
                    inline: true,
                },
                {
                    name: 'Notes',
                    value: "```B&T 3x is a cheaper option for a mount if Mc LL3 is unlocked.```",
                },
                {
                    name: 'Mod List',
                    value: (config.topTable + config.tl99 + config.rk0 + config.x400 + config.lug3 + config.noveske + config.hka2 + config.mfihk + config.ekp18 + config.shade + config.notedSpace + config.bt3x + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};