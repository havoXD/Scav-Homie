const config = require("./config.json")
module.exports = {
    name: 'beak74',
    cooldown: 30,
    aliases: ['beak-74', 'beak74n', 'beak-74n', 'beak', 'beakm', 'beakmn', 'bevepr', 'beveprkm', 'bevpo136', 'bevpo-136', 'bevpo', 'bevpo209', 'bevpo-209', 'bevepr136', 'bevepr-136', 'bevepr209', 'bevepr-209', 'beak101', 'beak-101', 'beak103', 'beak-103', 'beakms', 'beakmsn', 'beak74m', 'beak-74m', 'beaks-74', 'beaks74', 'beaks-74n', 'beaks74n', 'be209', 'be136', 'beaks74u', 'beaks74un', 'beaks74ub', 'beaks-74u', 'beaks74-un', 'beaks74-ub', 'be aks74u', 'be aks-74u', 'be aks74un', 'be aks-74un', 'be aks-74ub', 'be aks74ub', 'beak102', 'beak-102', 'beak104', 'beak-104', 'beak105', 'beak-105'],
    description: 'Best Ergonomic build for AK Series Guns',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best Ergo Builds **AK Series Guns**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%545**, **%556**, **%762** and/or **%366** for info about ammo',

            image: {
                url: 'https://i.postimg.cc/7L0Vb0Zt/beak74p.png',
            },
            fields: [{
                    name: '5.45 Stats',
                    value: "**Ergo: 90\nVertical Recoil: 77\nHorizontal Recoil: 202\nStats for AK-74**",
                    inline: true,
                },
                {
                    name: '7.62 Stats',
                    value: "**Ergo: 89\nVertical Recoil: 95\nHorizontal Recoil: 220\nStats for AKM**",
                    inline: true,
                },
                {
                    name: 'Notes',
                    value: "```VPO-136, AKM/AKMN and AKMS/AKMSN:\nDTK-1 Muzzle requires: Taktika Tula AK adapter.```\n```AKMS/AKMSN:\nCan't change stock but uses GP-25 as Butt pad.```\n```AKS-74/N/U/UB/UN: Use PT-3 Stock\nthat requires AK74/AKS-74 PT Lock.```\n```AK-74M and AK-101/102/103/104/105:\nUse GLR-16-S Stock\nthat requires RPK-16 Buffer Tube.```\n```AK-101/102: Uses VP-09 Muzzle\nthat requires CNC Warrior adapter```\n```AK-102/104/105: Use Zhukov-U as Handguard\nand 4.1 inch M-LOK as a Rail for grips.```\n```AKS-74U(N/B): Use XRSU74SU Handguard.```\n```AKS-74UB: Uses any of the default AK Muzzles.```\n```VPO-209: Does not use a muzzle.```",
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.kocherga + config.hexagon + config.hexagonr + config.fortisg + config.dtk1 + config.rk3 + config.pdc + config.rp1 + config.endTable),
                },
                {
                    name: 'Continuation',
                    value: (config.topNoted + config.ttula + config.ak74pt + config.aks74pt + config.pt3 + config.cnc + config.vp09 + config.gp25 + config.xrsu47 + config.zhukovu + config.mlok4 + config.endTable) + '\n**Best Ergo AK-74 ↓↓↓**',
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};