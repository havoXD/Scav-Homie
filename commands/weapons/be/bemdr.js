const config = require("../../config.json")

module.exports = {
    name: 'bemdr',
    cooldown: 30,
    aliases: ['bedtmdr', 'bedt', 'bedt-mdr', 'bedt mdr', 'be dt', 'be mdr', 'be dtmdr'],
    description: 'Best Ergo build for DT MDR.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best Ergo **DT MDR 5.56/7.62x51**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%556** and/or **%n762** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/Prj3Vf8V/bemdr.png',
            },
            fields: [{
                    name: '5.56 Stats',
                    value: "**Ergo: 92\nVertical Recoil: 70\nHorizontal Recoil: 196**",
                    inline: true,
                },
                {
                    name: '7.62 Stats',
                    value: "**Ergo: 93\nVertical Recoil: 94\nHorizontal Recoil: 221**",
                    inline: true,
                },
                {
                    name: 'Notes',
                    value: "```MBUS Iron Sights are only there to boost ergo.```\n```DT MDR 5.56: Uses VP-09 Muzzle.```",
                },
                {
                    name: 'Mod List',
                    value: (config.topTable + config.mbus + config.mlok4 + config.fortisRed + config.fortisg + config.notedSpace + config.vp09 + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};