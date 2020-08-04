const config = require("./config.json")

module.exports = {
    name: 'bsks',
    cooldown: 30,
    aliases: ['bopsks', 'bop-sks', 'bsimonov', 'b sks', 'bop sks', 'b op sks', 'b opsks'],
    description: 'Best Ergo build for Simonovs Rifles',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Budget Build **OP-SKS/SKS**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%762** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/W3mJ19F6/bopsks.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 35\nVertical Recoil: 136\nHorizontal Recoil: 300**",
                    inline: true,
                },
                {
                    name: 'Notes',
                    value: "```SKS: no mount that can be used for scopes.\nThe UTG only provides a place for sights.```\n```OP-SKS: Dovetail can be attached to put on scopes and other mounts.```",
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.utgsks + config.tbl + config.sksadpt + config.dtk1 + config.xps30 + config.notedSpace + config.dovetail + config.pso + config.endTable) + '\n**Budget OP-SKS ↓↓↓**',
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};