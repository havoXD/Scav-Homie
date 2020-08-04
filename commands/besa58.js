const config = require("./config.json")

module.exports = {
    name: 'besa58',
    cooldown: 30,
    aliases: ['besa-58', 'befal', 'besa', 'be58', 'besr25', 'besr-25', 'besr', 'be25', 'bersass', 'beR11', 'beremingtonr11', 'bem1a', 'bespringfield', 'ber11rsass', 'bersassr11'],
    description: 'Best ergo build for SA-58, SR-25, RSASS and M1A.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best Ergo Builds **SA-58**, **M1A**, **SR-25** and **RSASS**.',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%n762** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/MTzMNs3J/besa58.png',
            },
            fields: [{
                    name: 'SA-58 Stats',
                    value: "**Ergo: 84\nVertical Recoil: 175\nHorizontal Recoil: 300**",
                },
                {
                    name: 'M1A Stats',
                    value: "**Ergo: 92\nVertical Recoil: 97\nHorizontal Recoil: 175**",
                    inline: true,
                },
                {
                    name: 'SR-25 Stats',
                    value: "**Ergo: 92\nVertical Recoil: 133\nHorizontal Recoil: 288**",

                },
                {
                    name: 'RSASS Stats',
                    value: "**Ergo: 92\nVertical Recoil: 119\nHorizontal Recoil: 246**",
                    inline: true,
                },
                {
                    name: 'Notes',
                    value: "**Universal mods are listed as well as mods unique for each gun listed in this command.**",
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.uniparts + config.prsgen3 + config.cst + config.atlas7 + config.fortisg + config.space + config.sa58p + config.casvfas + config.agfal + config.extreme + config.casv5 + config.fal11 + config.faltube + config.endTable),
                },
                {
                    name: 'Continuation',
                    value: (config.m1ap + config.sass + config.fortisg + config.moear15 + config.m1a16 + config.socom16 + config.mbus + config.space + config.sr25p + config.urx4 + config.mlok4 + config.psg1 + config.sr2516 + config.kac + config.mbus + config.endTable),
                },
                {
                    name: 'Continuation',
                    value: (config.topRsassp + config.n6split + config.heracqr + config.psg1 + config.ar1018 + config.jp5b + config.mbus + config.endTable)
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};