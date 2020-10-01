const config = require("../../config.json")

module.exports = {
    name: 'brsks',
    cooldown: 30,
    aliases: ['bropsks', 'brop-sks', 'brsimonov', 'br sks', 'brop sks', 'br op sks', 'br opsks'],
    description: 'Best Recoil build for Simonovs Rifles',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best Recoil Build **OP-SKS/SKS**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%762** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/0Q41mZ1h/bropsks.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 58\nVertical Recoil: 75\nHorizontal Recoil: 164**",
                    inline: true,
                },
                {
                    name: 'Notes',
                    value: "```SKS has no mount that can be used for scopes.\nThe chassi only provides a place for sights.```",
                    inline: true,
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.intrafuse + config.tapco + config.hke1 + config.tapcosaw + config.sksadpt + config.srvv + config.rk2 + config.endTable) + '\n**Best Recoil OP-SKS ↓↓↓**'
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};