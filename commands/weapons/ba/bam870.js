const config = require("../../config.json")

module.exports = {
    name: 'bam870',
    cooldown: 30,
    aliases: ['baremingtonmodelm870', 'baremingtonm870', 'best accuracy m870', 'bestaccuracym870'],
    description: 'Best accuracy build for Remington Model M870',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best Accuracy **M870**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%12gb** and/or **%12gs** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/90qnPZgg/bam870.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 49\nVertical Recoil: 281\nHorizontal Recoil: 351\nAccuracy: 10.67 MOA**",
                    inline: true,
                },
                {
                    name: 'Notes',
                    value: "[Build is based on stock preset of M870](https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/9/91/M870.png?version=5f3ce7b3797d1b77b97d956d4e026dd1)",
                    inline: true,
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.m870660 + config.Mtu + config.exps3 + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};