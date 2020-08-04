const config = require("./config.json")

module.exports = {
    name: 'brmosin',
    cooldown: 30,
    aliases: ['br mosin'],
    description: 'Best Recoil build for Mosin',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best Recoil **Mosin**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%r762** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/6pNHdZzC/brmosin.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 23\nVertical Recoil: 44\nHorizontal Recoil: 127\nAccuracy: 1.28 MOA**",
                    inline: true,
                },
                {
                    name: '**Required quests**',
                    value: '```Archangel chassi is unlocked at trader after:\n"The Tarkov shooter" - Part 8\nWitt Machine muzzle is unlocked at trader after:\n"The Tarkov shooter" - Part 7```',
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.mosin730 + config.Witt + config.opforprs + config.kochetov + config.arbalet + config.nf30 + config.vudu + config.endTable)
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};