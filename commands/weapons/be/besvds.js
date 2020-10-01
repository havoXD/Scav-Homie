const config = require("../../config.json")

module.exports = {
    name: 'besvds',
    cooldown: 30,
    aliases: ['besvd', 'be svds'],
    description: 'Best Ergo for SVDS',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best Ergo **SVDS**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%r762** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/hPVq46xN/besvds.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 57\nVertical Recoil: 153\nHorizontal Recoil: 338**",
                    inline: true,
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.svdscust + config.sagmk1 + config.casv6 + config.fortisg + config.rk3 + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};