const config = require("./config.json")

module.exports = {
    name: 'brsass',
    cooldown: 30,
    aliases: ['b rsass', 'budgetrsass', 'budget rsass'],
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
                url: 'https://i.postimg.cc/dV2QMYgh/brsass.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 41\nVertical Recoil: 132\nHorizontal Recoil: 236**",
                    inline: true,
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.ar1022 + config.comp2a + config.ca2 + config.prsgen2 + config.MIAD + config.xps30 + config.rsasshg + config.rahg2 + config.tbl + config.rahg4 + config.rk0 + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};