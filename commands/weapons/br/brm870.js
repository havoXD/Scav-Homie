const config = require("../../config.json")

module.exports = {
    name: 'brm870',
    cooldown: 30,
    aliases: ['brremingtonmodelm870', 'brremingtonm870', 'best recoil m870', 'bestrecoilm870'],
    description: 'Best recoil build for Remington Model M870',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best Recoil **M870**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%12gb** and/or **%12gs** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/BQKsS1pv/brm870.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 44\nVertical Recoil: 88\nHorizontal Recoil: 111\nAccuracy: 18.91 MOA**",
                    inline: true,
                },
                {
                    name: 'Notes',
                    value: "[Build is based on stock preset of M870](https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/9/91/M870.png?version=5f3ce7b3797d1b77b97d956d4e026dd1)",
                    inline: true,
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.mecyl + config.monster + config.Mtu + config.ekp18 + config.shade + config.pr870 + config.rk2 + config.sga + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};