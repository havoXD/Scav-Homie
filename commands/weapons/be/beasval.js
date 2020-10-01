const config = require("../../config.json")

module.exports = {
    name: 'beasval',
    cooldown: 30,
    aliases: ['bevss', 'beas val', 'be aeval', 'be as val', 'bevssvintorez'],
    description: 'Best Ergo build for AS VAL/VSS',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best Ergo **AS VAL/VSS**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%939** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/63crmtjx/beasval.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 72\nVertical Recoil: 59\nHorizontal Recoil: 86**",
                    inline: true,
                },
                {
                    name: 'Notes',
                    value: "```VSS can not change pistol grip and stock.```",
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.asvalpg + config.prsgen3 + config.TOZ6p29m + config.fortisg + config.rp1 + config.endTable) + '\n**Best Ergo AS VAL ↓↓↓**',
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};