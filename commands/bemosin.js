const config = require("./config.json")

module.exports = {
    name: 'bemosin',
    cooldown: 30,
    aliases: ['be mosin'],
    description: 'Best Ergo build for Mosin',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best Ergo **Mosin**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%r762** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/WbZWF8m2/bemosin.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 34\nVertical Recoil: 159\nHorizontal Recoil: 458\nAccuracy: 2.33 MOA**",
                    inline: true,
                },
                {
                    name: '**Required quests**',
                    value: '```Archangel chassi is unlocked at trader after:\n"The Tarkov shooter" - Part 8```',
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.mosin514 + config.opforprs + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};