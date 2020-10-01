const config = require("../../config.json")

module.exports = {
    name: 'sv98',
    cooldown: 30,
    aliases: [, 'sv-98', 'bsv-98', 'brsv-98', 'besv-98', 'basv-98', 'bsv98', 'brsv98', 'besv98', 'basv98'],
    description: 'Build for SV-98',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Build for **SV-98**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%r762** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/7Yk5x5Rb/sv98.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 35\nVertical Recoil: 133\nHoriz Recoil: 442\nAccuracy: 0.52 MOA**",
                    inline: true,
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.mk20 + config.nf30 + config.vudu + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};