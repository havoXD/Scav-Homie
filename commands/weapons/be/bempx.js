const config = require("../../config.json")

module.exports = {
    name: 'bempx',
    cooldown: 30,
    aliases: ['be mpx', 'besigmpx', 'be sig mpx', 'besig mpx', 'be sigmpx', 'besig-mpx', 'be sig-mpx'],
    description: 'Best Ergo build for MPX.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best Ergo **MPX**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%919** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/x18ZBRz4/bempx.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 100\nVertical Recoil: 34\nHorizontal Recoil: 170**",
                    inline: true,
                },
                {
                    name: 'Mod List',
                    value: (config.topTable + config.mw65 + config.mlok4 + config.rk2 + config.mpx65 + config.taccom + config.mpxadpt + config.ca2 + config.prsgen3 + config.psg1 + config.sch + config.mbus + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};