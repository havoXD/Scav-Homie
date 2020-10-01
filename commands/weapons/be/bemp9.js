const config = require("../../config.json")

module.exports = {
    name: 'bemp9',
    cooldown: 30,
    aliases: ['bemp9', 'bemp9n', 'beb&tmp9', 'beb&tmp9n', 'beb&tmp9-n', 'bemp9-n', 'be mp9-n', 'be mp9n', 'be mp9', 'be b&tmp9-n', 'be b&tmp9', 'be b&t mp9', 'be b&t mp9-n'],
    description: 'Best Ergo build for MP9/MP9-N.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best Ergo **MP9/MP9-N**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%919** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/ydGMB5C6/bemp9.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 96\nVertical Recoil: 54\nHorizontal Recoil: 243**",
                    inline: true,
                },
                {
                    name: 'Notes',
                    value: "```MP9-N: Uses default B&T Grip and no mount.```\n```MP9-N: Might break the server when firing it because of the high fire rate.```",
                },
                {
                    name: 'Mod List',
                    value: (config.topTable + config.mp915 + config.mp9btm + config.fortisg + config.notedSpace + config.mp9n + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};