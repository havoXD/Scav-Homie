const config = require("./config.json")

module.exports = {
    name: 'bam700',
    cooldown: 30,
    aliases: ['bam700', 'ba m700'],
    description: 'Best accuracy build for Remington Model 700',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best accuracy **M700**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%n762** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/RZJK2mKL/bam700.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 40\nVertical Recoil: 119\nHorizontal Recoil: 431\nAccuracy: 0.46 MOA**",
                    inline: true,
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.m70026 + config.aics + config.modxmount + config.exps3 + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};