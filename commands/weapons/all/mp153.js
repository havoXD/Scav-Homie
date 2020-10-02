const config = require("../../config.json")

module.exports = {
    name: 'bmp153',
    cooldown: 30,
    aliases: ['bmp-153', 'b mp-153', 'budgetmp153', 'ba mp-153', 'bamp153', 'bestaccuracymp153', 'bamp-153', 'bamp153', 'brmp-153', 'brmp153', 'br mp-153', 'bestrecoilmp153', 'be mp-153', 'bemp153', 'bestergomp153', 'bemp-153', 'bemp153'],
    description: 'Builds for MP-153',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Budget and best accuracy build **MP-153**',
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
                    value: "**Ergo: 44\nVertical Recoil: 114\nHoriz Recoil: 146\nAccu: 12.03 MOA**",
                    inline: true,
                },
                {
                    name: 'Best Ergo Stats',
                    value: "**Ergo: 66\nVertical Recoil: 237\nHoriz Recoil: 304\nAccu: 18.94 MOA**",
                    inline: true,
                },
                {
                    name: 'Busget Stats',
                    value: "**Ergo: 35\nVertical Recoil: 187\nHoriz Recoil: 240\nAccu: 11.43 MOA**",
                    inline: true,
                },
                {
                    name: 'Notes',
                    value: "**Best Accuracy**\n```Change the EKP-8-18 Sight on the budget build to a EXPS3 Sight for the best accuracy possible on the MP-153.```\nAt the bottom you can see a picture of the Best Recoil MP-153.",
                    inline: true,
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.brspace + config.mp153750 + config.mecyl + config.monster + config.satt + config.ag58 + config.agr870 + config.hke1 + config.space + config.bespace + config.mp153610 + config.rtc + config.satt + config.ag58 + config.agr870 + config.prsgen3 + config.endTable),
                },
                {
                    name: '**Budget and noted parts**',
                    value: (config.end + config.bspace + config.mp153750 + config.rtc + config.sprut + config.x400 + config.sprm + config.ekp18 + config.shade + config.notedSpace + config.exps3 + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};