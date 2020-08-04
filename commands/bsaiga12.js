const config = require("./config.json")

module.exports = {
    name: 'bsaiga12',
    cooldown: 30,
    aliases: ['bsaiga 12', 'bsaiga12ga', 'budgetsaiga12', 'bsaiga 12ga', 'b saiga 12ga', 'bsaiga 12 ga'],
    description: 'Budget build for Saiga 12ga',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Budget build **Saiga 12**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%12gb** and/or **%12gs** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/W1NGGYVy/bsaiga12.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 43\nVertical Recoil: 101\nHorizontal Recoil: 168\nAccuracy: 18.91 MOA**",
                    inline: true,
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.monster + config.mtu002s + config.x400 + config.rk0 + config.xps30 + config.gp25 + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};