const config = require("./config.json")

module.exports = {
    name: 'bm870',
    cooldown: 30,
    aliases: ['bremingtonmodelm870', 'bremingtonm870', 'budgetm870'],
    description: 'Budget build for Remington Model M870',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Budget build **M870**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%12gb** and/or **%12gs** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/mgW4t2py/bm870.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 52\nVertical Recoil: 198\nHorizontal Recoil: 247\nAccuracy: 42.46 MOA**",
                    inline: true,
                },
                {
                    name: 'Notes',
                    value: "[Build is based on stock preset of M870](https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/9/91/M870.png?version=5f3ce7b3797d1b77b97d956d4e026dd1)",
                    inline: true,
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.sga + config.rtc + config.Mesa + config.x400 + config.Mtu + config.xps30 + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};