const config = require("../../config.json")

module.exports = {
    name: 'm9a3',
    cooldown: 30,
    aliases: ['berettam9a3', 'bm9a3', 'bberettam9a3', 'brm9a3', 'bem9a3'],
    description: 'Build for Beretta M9A3',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Build for **M9A3**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%919** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/TY5f5Ldj/m9a3.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 71\nVertical Recoil: 500\nHorizontal Recoil: 272**",
                    inline: true,
                },
                {
                    name: '**Build**',
                    value: (config.topTable + config.m9 + config.ffbase + config.ff3 + config.xc1 + config.endTable)
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};