const config = require("./config.json")

module.exports = {
    name: 'mp153',
    cooldown: 30,
    aliases: ['brmp153', 'brmp-153', 'br mp-153', 'bestrecoilmp153', 'be mp-153', 'bestergomp153', 'bemp-153', 'bemp153', 'budgetmp153', 'bmp153', 'bmp-153', 'b mp153'],
    description: 'Builds for MP-153',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Builds for **MP-153**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%12gb** and/or **%12gs** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/G22zPdbh/brmp153.png',
            },
            fields: [{
                    name: 'Best Recoil Stats',
                    value: "**Ergo: 44\nVertical Recoil: 114\nHoriz Recoil: 146\nAcc: 23.38 MOA**",
                    inline: true,
                },
                {
                    name: 'Best Ergo Stats',
                    value: "**Ergo: 66\nVertical Recoil: 237\nHoriz Recoil: 304\nAcc: 35.92 MOA**",
                    inline: true,
                },
                {
                    name: 'Budget Stats',
                    value: "**Ergo: 35\nVertical Recoil: 187\nHoriz Recoil: 240\nAcc: 22.21 MOA**",
                    inline: true,
                },
                {
                    name: 'Best Accuracy',
                    value: "‎‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ↑‎‏‏‎ ‎21.51 MOA with EXPS3 ↑\n```Change the EKP-8-18 on the budget build for the EXPS3 for the best accuracy possible on the MP-153```",
                    inline: true,
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.brspace + config.mp153750 + config.mecyl + config.monster + config.satt + config.ag58 + config.agr870 + config.hke1 + config.space + config.bespace + config.mp153610 + config.rtc + config.satt + config.ag58 + config.agr870 + config.prsgen3 + config.endTable),
                },
                {
                    name: '**Budget and noted parts**',
                    value: '```' + (config.bspace + config.mp153750 + config.rtc + config.sprut + config.x400 + config.sprm + config.ekp18 + config.shade + config.notedSpace + config.exps3 + config.endTable) + '\n**Best Recoil MP-153 ↓↓↓**',
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};