const config = require("../../config.json")

module.exports = {
    name: 'brmp7',
    cooldown: 30,
    aliases: ['brmp7a1', 'brmp7a2', 'brhkmp7', 'brhkmp7a1', 'brhkmp7a2'],
    description: 'Best Recoil build for MP7A1/A2.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best Recoil **MP7**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%46** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/7L9TX1dX/brmp7.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 61\nVertical Recoil: 46\nHorizontal Recoil: 155**",
                    inline: true,
                },
                {
                    name: 'Notes',
                    value: "```MP7A1: Can not change foregrip.\nMBUS Iron sights are only there to boost ergo.```",
                },
                {
                    name: 'Mod List',
                    value: (config.topTable + config.rk2 + config.mbus + config.rotex2 + config.endTable)
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};