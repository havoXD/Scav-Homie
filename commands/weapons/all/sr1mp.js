const config = require("../../config.json")

module.exports = {
    name: 'sr1mp',
    cooldown: 30,
    aliases: ['bsr1mp', 'brsr1mp', 'besr1mp', 'SR-1MP', 'bSR-1MP', 'brSR-1MP', 'beSR-1MP'],
    description: 'Build for SR-1MP',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Build for **SR-1MP**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%921** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/TYz4530B/sr1mp.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 78\nVertical Recoil: 520\nHorizontal Recoil: 325**",
                    inline: true,
                },
                {
                    name: 'Stats with silencer',
                    value: "**Ergo: 70\nVertical Recoil: 515\nHorizontal Recoil: 322**",
                    inline: true,
                },
                {
                    name: '**Build**',
                    value: (config.topTable + config.x4sr1mp + config.xc1 + config.ffbase + config.ff3 + config.sr1mpadpt + config.sr1mpsup + config.endTable)
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};