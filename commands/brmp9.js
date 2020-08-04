const config = require("./config.json")

module.exports = {
    name: 'brmp9',
    cooldown: 30,
    aliases: ['brmp9', 'brmp9n', 'brb&tmp9', 'brb&tmp9n', 'brb&tmp9-n', 'brmp9-n', 'br mp9-n', 'br mp9n', 'br mp9', 'br b&tmp9-n', 'br b&tmp9', 'br b&t mp9', 'br b&t mp9-n'],
    description: 'Best Recoil build for MP9/MP9-N.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best Recoil **MP9/MP9-N**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%919** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/Y2dbTqPf/brmp9.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 73\nVertical Recoil: 47\nHorizontal Recoil: 211**",
                    inline: true,
                },
                {
                    name: 'Notes',
                    value: "```MP9-N: Uses default B&T Grip and no mount.```\n```MP9-N: Might break the server when firing it because of the high fire rate.```",
                },
                {
                    name: 'Mod List',
                    value: (config.topTable + config.mp9adpt + config.mp9sup + config.mp9btm + config.rk2 + config.notedSpace + config.mp9n + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};