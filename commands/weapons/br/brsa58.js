const config = require("../../config.json")

module.exports = {
    name: 'brsa58',
    cooldown: 30,
    aliases: ['brsa-58', 'brfal', 'brsa', 'br58', 'brsr25', 'brsr-25', 'brsr', 'br25', 'brrsass', 'brR11', 'brremingtonr11', 'brm1a', 'brspringfield', 'brr11rsass', 'brrsassr11'],
    description: 'Best Recoil build for SA-58, SR-25, RSASS and M1A.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best Recoil Builds **RSASS**, **M1A**, **SA-58** and **SR-25**.',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%n762** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/QdyTTRdj/brsa58.png',
            },
            fields: [{
                    name: 'SA-58 Stats',
                    value: "**Ergo: 46\nVertical Recoil: 63\nHorizontal Recoil: 108**",
                },
                {
                    name: 'M1A Stats',
                    value: "**Ergo: 58\nVertical Recoil: 37\nHorizontal Recoil: 63**",
                    inline: true,
                },
                {
                    name: 'SR-25 Stats',
                    value: "**Ergo: 57\nVertical Recoil: 75\nHorizontal Recoil: 162**",

                },
                {
                    name: 'RSASS Stats',
                    value: "**Ergo: 56\nVertical Recoil: 68\nHorizontal Recoil: 140**",
                    inline: true,
                },
                {
                    name: 'Notes',
                    value: "**Universal mods are listed as well as mods unique for each gun listed in this command.**\n\n**Pistol grips** and **MBUS Iron sights** that are included in these builds are only there to boost ergo as these guns can get pretty low in ergo but they are not required.\nAny other pistol grips work.",
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.uniparts + config.hke1 + config.lantac51 + config.direct + config.mdevice + config.rk2 + config.space + config.sa58p + config.faltube + config.mesa + config.casvfal + config.agfal + config.extreme + config.casv5 + config.fal21 + config.endTable),
                },
                {
                    name: 'Continuation',
                    value: (config.m1ap + config.sass + config.mesa + config.moear15 + config.m1a22 + config.space + config.sr25p + config.sitube + config.mlok4 + config.psg1 + config.urx4 + config.sr2520 + config.space + config.rsassp + config.sitube + config.rsasshg + config.rahg4 + config.psg1 + config.ar1022 + config.endTable),
                },
                {
                    name: '‏‏‎ ',
                    value: '**Best Recoil SA-58 ↓↓↓**',
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};