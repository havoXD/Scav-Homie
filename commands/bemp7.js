const config = require("./config.json")

module.exports = {
    name: 'bemp7',
    cooldown: 30,
    aliases: ['bemp7a1', 'bemp7a2', 'behkmp7', 'behkmp7a1', 'behkmp7a2'],
    description: 'Best Ergo build for MP7A1/A2.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best Ergo **MP7**',
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
                    value: "**Ergo: 80\nVertical Recoil: 49\nHorizontal Recoil: 166**",
                    inline: true,
                },
                {
                    name: 'Notes',
                    value: "```MP7A1: Can not change foregrip.```",
                    inline: true,
                },
                {
                    name: 'Mod List',
                    value: (config.topTable + config.mbus + config.fortisg + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};