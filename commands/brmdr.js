const config = require("./config.json")

module.exports = {
    name: 'brmdr',
    cooldown: 30,
    aliases: ['brdtmdr', 'brdt', 'brdt-mdr', 'brdt mdr', 'br dt', 'br mdr', 'br dtmdr'],
    description: 'Best Recoil build for DT MDR.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best Recoil **DT MDR 5.56/7.62x51**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%556** and/or **%n762** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/0yySr77R/brdtmdr.png',
            },
            fields: [{
                    name: '5.56 Stats',
                    value: "**Ergo: 69\nVertical Recoil: 62\nHorizontal Recoil: 172**",
                    inline: true,
                },
                {
                    name: '7.62 Stats',
                    value: "**Ergo: 71\nVertical Recoil: 88\nHorizontal Recoil: 206**",
                    inline: true,
                },
                {
                    name: 'Notes',
                    value: "```MBUS Iron Sights are only there to boost ergo.```",
                },
                {
                    name: 'Mod List',
                    value: (config.topTable + config.mbus + config.mlok4 + config.rk2 + config.wave + config.waveqd + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};