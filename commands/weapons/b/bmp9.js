const config = require("../../config.json")

module.exports = {
    name: 'bmp9',
    cooldown: 30,
    aliases: ['bmp9', 'bmp9n', 'bb&tmp9', 'bb&tmp9n', 'bb&tmp9-n', 'bmp9-n', 'b mp9-n', 'b mp9n', 'b mp9', 'b b&tmp9-n', 'b b&tmp9', 'b b&t mp9', 'b b&t mp9-n'],
    description: 'Budget build for MP9/MP9-N.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Budget **MP9/MP9-N**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%919** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/pVcPGrd1/rbmp9.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 81\nVertical Recoil: 52\nHorizontal Recoil: 236**",
                    inline: true,
                },
                {
                    name: 'Notes',
                    value: "```MP9-N: Uses default B&T Grip and no mount.```\n```MP9-N: Might break the server when firing it because of the high fire rate.```",
                },
                {
                    name: 'Mod List',
                    value: (config.topTable + config.ekp8 + config.mp9side + config.x400 + config.mp9btm + config.rk0 + config.mp925 + config.notedSpace + config.mp9n + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};