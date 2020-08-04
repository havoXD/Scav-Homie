const config = require("./config.json")

module.exports = {
    name: 'be590',
    cooldown: 30,
    aliases: ['bem590', 'bem590a1', 'bemossberg590a1', 'bemossberg', 'bemossberg590'],
    description: 'Best ergo build for Mossberg 590A1',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best ergo **Mossberg 590A1**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%12gb** and/or **%12gs** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/YCNz323j/be590x.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 58\nVertical Recoil: 214\nHorizontal Recoil: 238\nAccuracy: 44.69 MOA**",
                    inline: true,
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.leo590 + config.ca2 + config.prsgen3 + config.hg590 + config.mlok4 + config.fortisg + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};