const config = require("./config.json")
module.exports = {
    name: 'bak74',
    cooldown: 30,
    aliases: ['bak-74', 'bak', 'bak74n', 'bak-74n', 'bakm', 'bakmn', 'bvepr', 'bveprkm', 'bvpo136', 'bvpo-136', 'bvpo', 'bvpo209', 'bvpo-209', 'bvepr136', 'bvepr-136', 'bvepr209', 'bvepr-209', 'bak101', 'bak-101', 'bak103', 'bak-103', 'bakms', 'bakmsn', 'bak74m', 'bak-74m', 'baks-74', 'baks74', 'baks-74n', 'baks74n', 'b209', 'b136', 'baks74u', 'baks74un', 'baks74ub', 'baks-74u', 'baks74-un', 'baks74-ub', 'b aks74u', 'b aks-74u', 'b aks74un', 'b aks-74un', 'b aks-74ub', 'b aks74ub', 'bak102', 'bak-102', 'bak104', 'bak-104', 'bak105', 'bak-105'],
    description: 'Budget build for AK Series Guns',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Budget Builds **AK Series Guns**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%545**, **%556**, **%762** and/or **%366** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/7YB24J8G/bak74p.png',
            },
            fields: [{
                    name: '5.45 Stats',
                    value: "**Ergo: 42\nVertical Recoil: 74\nHorizontal Recoil: 194\nStats for AK-74N**",
                    inline: true,
                },
                {
                    name: '7.62 Stats',
                    value: "**Ergo: 41\nVertical Recoil: 93\nHorizontal Recoil: 215\nStats for AKM**",
                    inline: true,
                },
                {
                    name: 'Notes',
                    value: "Many AK guns have different standard stocks,\nshoulder pad fits on all of them.\n\n```VPO-136, AKM/AKMN and AKMS/AKMSN:\nDTK-1 Muzzle requires: Taktika Tula AK Adapter.```\n```AK(S)-74, AKM(S), VPO-136/209:\nDo not have built-in mounts for sights.\nTT01 Mount is required.\nXPS3-0 Sight goes on the TT01 and is recommended.```\n```AK-101/102 and AKS-74UB: Use SRVV Muzzle.```\n```AKS-74U(N/B): Use B-11 Handguard.```\n```AKS-74U: No built in mount, uses B-18 Mount\nXPS3-0 Sight is recommended.```\n```VPO-209: Does not use a muzzle.```",
                },
                {
                    name: 'Mod List',
                    value: (config.topTable + config.gp25 + config.ak100 + config.rk0 + config.dtk1 + config.ekp8 + config.notedSpace + config.ttula + config.xps30 + config.tt01 + config.b18 + config.b11 + config.srvv + config.endTable) + '\n**Budget AK-74N ↓↓↓**',
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};