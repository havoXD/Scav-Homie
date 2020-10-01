const config = require("../../config.json")

module.exports = {
    name: 'brm4',
    cooldown: 30,
    aliases: ['brm4a1', 'brtx', 'brtx15', 'brtx-15', 'brlonestar', 'brlonestar', 'brlonestar tx-15', 'brlonestar tx', 'brlonestar tx15', 'bradar', 'bradar215', 'bradar2-15', 'bradar 2-15', 'br2-15', 'br.223', 'br223', 'brcolt', 'brcoltm4', 'brcoltm4a1'],
    description: 'Best Recoil build for M4A1, TX-15 and ADAR.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best Recoil **M4A1**, **TX-15** and **ADAR 2-15**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%556** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/pXs1tfmD/brm4p.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 82\nVertical Recoil: 32\nHorizontal Recoil: 89\nStats for M4A1 build**",
                    inline: true,
                },
                {
                    name: 'Mod List',
                    value: (config.topTable + config.sitube + config.hke1 + config.psg1 + config.mur1s + config.ar15370 + config.jp5b + config.sai14 + config.st6012 + config.jailbreak + config.mlok4 + config.rk2 + config.raptor + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};