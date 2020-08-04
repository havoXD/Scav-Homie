const config = require("./config.json")

module.exports = {
    name: 'bm1a',
    cooldown: 30,
    aliases: ['b m1a', 'budget m1a', 'budgetm1a'],
    description: 'Budget build for M1A',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Budget build **M1A**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%n762** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/cCv1P8NW/bm1a.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 41\nVertical Recoil: 132\nHorizontal Recoil: 236**",
                    inline: true,
                },
                {
                    name: 'Base',
                    value: "[This build is based on the stock preset of the M1A](https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/5/5f/M1A_Icon.png?version=1e1e01d3d5010f164bcf086fd3e07b9c)"
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.m1a16 + config.socom16 + config.comp2a + config.arms18 + config.xps30 + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};