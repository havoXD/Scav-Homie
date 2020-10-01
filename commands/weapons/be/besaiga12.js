const config = require("../../config.json")

module.exports = {
    name: 'besaiga12',
    cooldown: 30,
    aliases: ['besaiga 12', 'besaiga12ga', 'bestergosaiga12', 'besaiga 12ga', 'be saiga 12ga', 'besaiga 12 ga'],
    description: 'Best Ergo build for Saiga 12ga',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best Ergo **Saiga 12**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%12gb** and/or **%12gs** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/05S0PJZV/besaiga12.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 78\nVertical Recoil: 241\nHorizontal Recoil: 402\nAccuracy: 18.91 MOA**",
                    inline: true,
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.rp1 + config.mtu002s + config.fortisg + config.akts + config.prsgen3 + config.rk3 + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};