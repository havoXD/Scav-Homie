const config = require("./config.json")

module.exports = {
    name: 'brsaiga12',
    cooldown: 30,
    aliases: ['brsaiga 12', 'brsaiga12ga', 'bestrecoilsaiga12', 'brsaiga 12ga', 'br saiga 12ga', 'brsaiga 12 ga'],
    description: 'Best recoil build for Saiga 12ga',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best Recoil **Saiga 12**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%12gb** and/or **%12gs** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/YqfNmK5g/brsaiga12.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 38\nVertical Recoil: 93\nHorizontal Recoil: 155\nAccuracy: 18.91 MOA**",
                    inline: true,
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.monster + config.mtu002l + config.ekp18 + config.shade + config.rk2 + config.gp25 + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};