const config = require("../../config.json")

module.exports = {
    name: 'rfb',
    cooldown: 30,
    aliases: ['keltec', 'kel-tec', 'brrfb', 'berfb', 'brfb', 'bkeltec', 'bkel-tec', 'bkel-tecrfb', 'bekeltec', 'bekel-tec rfb', 'bekeltecrfb', 'bekel-tecrfb', 'brkeltecrfb', 'brkel-tecrfb', 'brkel-tec', 'brkeltec rfb', 'brkel-tec rfb', 'bkeltecrfb'],
    description: 'Builds for Kel-Tec RFB',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: '**Kel-Tec RFB** Builds',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%n762** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/W4GdtW7D/keltec.png',
            },
            fields: [{
                    name: 'BR Stats',
                    value: "**Ergo: 49\nVertical Recoil: 123\nHoriz Recoil: 218**",
                    inline: true,
                },
                {
                    name: 'BE Stats',
                    value: "**Ergo: 68\nVertical Recoil: 156\nHoriz Recoil: 276**",
                    inline: true,
                },
                {
                    name: 'B Stats',
                    value: "**Ergo: 52\nVertical Recoil: 135\nHoriz Recoil: 239**",
                    inline: true,
                },
                {
                    name: 'Notes',
                    value: "```Best ergo build uses Fortis grip instead of RK-2,\nonly MBUS Iron sights and\nthe Thread protection cap for more ergo.```\n```Budget build uses RK-0 instead of RK-2\nand Atlas-7 compensator instead of the suppressor.```",
                },
                {
                    name: 'Mod List',
                    value: (config.topTable + config.brspace + config.rfbadpt + config.direct + config.lantac51 + config.mdevice + config.rk2 + config.bespace + config.rfbcap + config.fortisg + config.mbus + config.bspace + config.rk0 + config.xps30 + config.rfbadpt + config.atlas7 + config.endTable) + '\n**Best Recoil Kel-Tec RFB ↓↓↓**',
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};