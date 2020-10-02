const config = require("../../config.json")

module.exports = {
    name: 'basaiga12',
    cooldown: 30,
    aliases: ['basaiga 12', 'basaiga-12', 'basaiga12ga', 'basaiga12', 'basaiga 12ga', 'ba saiga 12ga', 'basaiga 12 ga'],
    description: 'Best accuracy build for Saiga-12',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best Accuracy **Saiga-12**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%12gb** and/or **%12gs** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/90ydpvz6/basaiga12.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 53\nVertical Recoil: 230\nHorizontal Recoil: 384\nAccuracy: 18.15 MOA**",
                    inline: true,
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.thread + config.b13v + config.exps3 + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};