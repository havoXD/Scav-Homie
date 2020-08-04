const config = require("./config.json")

module.exports = {
    name: 'bmp133',
    cooldown: 30,
    aliases: ['bmp-133', 'b mp-133', 'budgetmp133', 'ba mp-133', 'bestaccuracymp133', 'bamp-133', 'bamp133'],
    description: 'Budget and best accuracy build for MP-133',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Budget and best accuracy build **MP-133**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%12gb** and/or **%12gs** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/PxHjM9gL/bmp133.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 35\nVertical Recoil: 218\nHorizontal Recoil: 273\nAccuracy: 21.88 MOA (21.19 MOA with EXPS3)**",
                    inline: true,
                },
                {
                    name: 'Notes',
                    value: "**Best Accuracy**\n```Change XPS3-0 to EXPS3 for the best accuracy possible on the MP-133.```",
                    inline: true,
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.mp133750 + config.rtc + config.etmi + config.xps30 + config.sprut + config.x400 + config.notedSpace + config.exps3 + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};