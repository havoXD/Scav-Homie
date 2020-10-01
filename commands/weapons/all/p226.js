const config = require("../../config.json")

module.exports = {
    name: 'p226',
    cooldown: 30,
    aliases: [, 'p226r', 'bp226', 'bp226r', 'brp226', 'brp226r', 'bep226', 'bep226r'],
    description: 'Builds for the P226r',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Build for **P226r**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%919** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/66GmddZQ/p226r.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 92\nVertical Recoil: 407\nHorizontal Recoil: 253**",
                    inline: true,
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.p226b + config.TJ + config.axel + config.p226hogue + config.sig220 + config.ffbase + config.ff3 + config.xc1 + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};