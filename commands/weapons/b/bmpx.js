const config = require("../../config.json")

module.exports = {
    name: 'bmpx',
    cooldown: 30,
    aliases: ['b mpx', 'bsigmpx', 'b sig mpx', 'bsig mpx', 'b sigmpx', 'bsig-mpx', 'b sig-mpx'],
    description: 'Budget build for MPX.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Budget **MPX**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%919** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/RFKyXZHC/bmpx.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 71\nVertical Recoil: 31\nHorizontal Recoil: 157**",
                    inline: true,
                },
                {
                    name: 'Mod List',
                    value: (config.topTable + config.mpxgen1 + config.gen14 + config.rk0 + config.gen12 + config.x400 + config.mpx203 + config.taccom + config.mdcqb + config.hogue + config.sch + config.ekp18 + config.shade + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};