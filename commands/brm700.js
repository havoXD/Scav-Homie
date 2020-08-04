const config = require("./config.json")

module.exports = {
    name: 'brm700',
    cooldown: 30,
    aliases: ['brm700', 'br m700'],
    description: 'Best Recoil build for Remington Model 700',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best Recoil **M700**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%n762** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/pLLL4JjQ/brm700.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 39\nVertical Recoil: 37\nHorizontal Recoil: 135\nAccuracy: 0.77 MOA**",
                    inline: true,
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.m70020 + config.direct + config.lantac51 + config.mdevice + config.modx + config.modxhg + config.casv6 + config.rk2 + config.modxmount + config.hogue + config.mesa + config.hke1 + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};