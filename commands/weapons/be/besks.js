const config = require("../../config.json")

module.exports = {
    name: 'besks',
    cooldown: 30,
    aliases: ['beopsks', 'beop-sks', 'besimonov', 'be sks', 'beop sks', 'be op sks', 'be opsks'],
    description: 'Best Ergo build for Simonovs Rifles',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best Ergo Build **OP-SKS/SKS**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%762** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/fy5LRf7c/beopss.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 87\nVertical Recoil: 93\nHorizontal Recoil: 204**",
                    inline: true,
                },
                {
                    name: 'Notes',
                    value: "```SKS: no mount that can be used for scopes.\nThe chassi only provides a place for sights.```",
                    inline: true,
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.intrafuse + config.tapco + config.glr16s + config.tapcosaw + config.sksadpt + config.dtk1 + config.fortisg + config.endTable) + '\n**Best Ergo SKS ↓↓↓**'
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};