const config = require("../../config.json")

module.exports = {
    name: 'bamosin',
    cooldown: 30,
    aliases: ['ba mosin'],
    description: 'Best accuracy build for Mosin',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best accuracy **Mosin**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%r762** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/VsdH1md0/bamosin.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 26\nVertical Recoil: 125\nHorizontal Recoil: 361\nAccuracy: 1.18 MOA**",
                    inline: true,
                },
                {
                    name: 'Required quests',
                    value: '```MNG rail is unlocked at trader after:\n"The Tarkov shooter" - Part 2```',
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.mosin730 + config.tiger + config.comp2a + config.mng + config.exps3 + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};