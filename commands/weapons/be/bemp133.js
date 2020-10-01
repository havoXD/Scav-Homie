const config = require("../../config.json")

module.exports = {
    name: 'bemp133',
    cooldown: 30,
    aliases: ['bemp-133', 'be mp-133', 'bestergomp133'],
    description: 'Best ergo build for MP-133',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best ergo build **MP-133**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%12gb** and/or **%12gs** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/G2j1gzRX/bemp133.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 78\nVertical Recoil: 263\nHorizontal Recoil: 328\nAccuracy: 22.86 MOA**",
                    inline: true,
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.rtc + config.customhg + config.fortisg + config.satt + config.ag58 + config.agr870 + config.prsgen3 + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};