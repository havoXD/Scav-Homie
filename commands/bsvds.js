const config = require("./config.json")

module.exports = {
    name: 'bsvds',
    cooldown: 30,
    aliases: ['bsvd', 'b svds'],
    description: 'Budget build for SVDS',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Budget build **SVDS**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%r762** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/nVyJJpsv/bsvds.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 39\nVertical Recoil: 170\nHorizontal Recoil: 375**",
                    inline: true,
                },
                {
                    name: 'Notes',
                    value: "```PSO Scope can be used to save money instead of\nB-13V + 30mm rings + Burris.```",
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.b13v + config.nf30 + config.burrisff + config.caaxrs + config.rk6 + config.tbl + config.ak12 + config.notedSpace + config.pso + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};