const config = require("../../config.json")
module.exports = {
    name: 'bem4',
    cooldown: 30,
    aliases: ['bem4a1', 'betx', 'betx15', 'betx-15', 'belonestar', 'belonestar', 'belonestar tx-15', 'belonestar tx', 'belonestar tx15', 'beadar', 'beadar215', 'beadar2-15', 'beadar 2-15', 'be2-15', 'be.223', 'be223', 'becolt', 'becoltm4', 'becoltm4a1'],
    description: 'Best Ergo build for M4A1, TX-15 and ADAR.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best Ergo **M4A1**, **TX-15** and **ADAR 2-15**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%556** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/xC5nD6BK/bem4p.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 100\nVertical Recoil: 71\nHorizontal Recoil: 194\nStats for M4A1 build**",
                    inline: true,
                },
                {
                    name: 'Mod List',
                    value: (config.topTable + config.ca2 + config.prsgen3 + config.gen3 + config.sai10 + config.mlok4 + config.fortisg + config.ar15260 + config.vp09 + config.jp5b + config.psg1 + config.raptor + config.ncstar + config.pk06 + config.battle + config.mbus + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};