const config = require("../../config.json")

module.exports = {
    name: 'bem870',
    cooldown: 30,
    aliases: ['beremingtonmodelm870', 'beremingtonm870', 'best ergo m870', 'bestergom870'],
    description: 'Best ergo build for Remington Model M870',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best Ergo **M870**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%12gb** and/or **%12gs** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/Y2VMBx1V/bem870.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 100\nVertical Recoil: 317\nHorizontal Recoil: 396\nAccuracy: 37.81 MOA**",
                    inline: true,
                },
                {
                    name: 'Notes',
                    value: "[Build is based on stock preset of M870](https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/9/91/M870.png?version=5f3ce7b3797d1b77b97d956d4e026dd1)",
                    inline: true,
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.m870325 + config.moem870 + config.mlok4 + config.fortisg + config.leo + config.hogue + config.prsgen3 + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};