const config = require("../../config.json")

module.exports = {
    name: 'bmdr',
    cooldown: 30,
    aliases: ['bdtmdr', 'bdt', 'bdt-mdr', 'bdt mdr', 'b dt', 'b mdr', 'b dtmdr'],
    description: 'Budget build for DT MDR.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Budget build **DT MDR 5.56/7.62x51**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%556** and/or **%n762** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/85SRT4gR/bmdr.png',
            },
            fields: [{
                    name: '5.56 Stats',
                    value: "**Ergo: 79\nVertical Recoil: 70\nHorizontal Recoil: 194**",
                    inline: true,
                },
                {
                    name: '7.62 Stats',
                    value: "**Ergo: 81\nVertical Recoil: 99\nHorizontal Recoil: 223**",
                    inline: true,
                },
                {
                    name: 'Notes',
                    value: "```DT MDR 5.56: Uses Beast 223 Muzzle.```",
                },
                {
                    name: 'Mod List',
                    value: (config.topTable + config.beast30 + config.xps30 + config.mlok4 + config.rk0 + config.mlok2 + config.tbl + config.notedSpace + config.beast223 + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};