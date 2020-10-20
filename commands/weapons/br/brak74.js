const config = require("../../config.json");


module.exports = {
    name: 'brak74',
    cooldown: 30,
    aliases: ['brak-74', 'brak', 'brak74n', 'brak-74n', 'brakm', 'brakmn', 'brvepr', 'brveprkm', 'brvpo136', 'brvpo-136', 'brvpo209', 'brvpo-209', 'brvepr136', 'brvepr-136', 'brvepr209', 'brvepr-209', 'brak101', 'brak-101', 'brak103', 'brak-103', 'brakms', 'brakmsn', 'brak74m', 'brak-74m', 'baks-74', 'braks74', 'braks-74n', 'braks74n', 'br209', 'br136', 'braks74u', 'braks74un', 'braks74ub', 'braks-74u', 'braks74-un', 'braks74-ub', 'br aks74u', 'br aks-74u', 'br aks74un', 'br aks-74un', 'br aks-74ub', 'br aks74ub', 'brak102', 'brak-102', 'brak104', 'brak-104', 'brak105', 'brak-105'],
    description: 'Best Recoil Builds for AK Series Guns',
    guildOnly: true,

    execute: async(message, args) => {
        const Embed = {
            color: 0x0099ff,
            title: 'Best Recoil Builds **AK Series Guns**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%545**, **%556**, **%762** and/or **%366** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/CxdrMR89/brak74p.png',
            },
            fields: [{
                    name: '5.45 Stats',
                    value: "**Ergo: 69\nVertical Recoil: 47\nHorizontal Recoil: 124\nStats for AK-74**",
                    inline: true
                },
                {
                    name: '7.62 Stats',
                    value: "**Ergo: 63\nVertical Recoil: 56\nHorizontal Recoil: 130\nStats for AKM**",
                    inline: true,
                },
                {
                    name: 'Notes',
                    value: "```VPO-136, AKM/AKMN and AKMS/AKMSN:\nUse Lantac Dragon Muzzle.```\n```AKMS/AKMSN:\nCan't change stock but uses GP-25 as Butt pad.```\n```AK-74M, AKS-74(N/U/UB/UN) and AK-101/2/3/4/5:\nUse PT-3 Stock that requires AK74/AKS-74 PT Lock.```\n```AK-101/102: Use Wave QD Suppressor\nthat requires Wave Muzzle and CNC Adapter.```\n```AK-103/104: Use JMAC Muzzle.```\n```AK-102/4/5: Use Aggressor Handguard.```\n```AKS-74U(N/B): Use XRSU74SU Handguard.```\n```VPO-209: Uses Rotor 43 .366 TKM.```",
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.zhukovs + config.vltorcmrd + config.strike6 + config.rk2 + config.rk3 + config.rp1 + config.pdc + config.pws45 + config.endTable),
                },
                {
                    name: 'Continuation',
                    value: (config.topNoted + config.lantac + config.jmac + config.cnc + config.wave + config.waveqd + config.pt3 + config.ak74pt + config.aks74pt + config.aggressor + config.xrsu47 + config.gp25 + config.vposup + config.endTable) + '\n**Best Recoil AK-74 ↓↓↓**',
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };
        message.channel.send({ embed: Embed });
    },
};