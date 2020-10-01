const config = require("../../config.json")

module.exports = {
    name: 'bsr25',
    cooldown: 30,
    aliases: ['bkac', 'bkacsr25', 'bsr-25', 'bkac sr25', 'bkac sr-25'],
    description: 'Budget build for SR-25',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Budget build **SR-25**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%n762** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/d1LRLLjN/bsr25.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 56\nVertical Recoil: 133\nHorizontal Recoil: 288**",
                    inline: true,
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.cst + config.emod + config.colta2 + config.urx4 + config.mlok2 + config.tbl + config.mlok4 + config.rk0 + config.sr2516 + config.comp2a + config.xps30 + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};