const config = require("../../config.json")

module.exports = {
    name: 'bem700',
    cooldown: 30,
    aliases: ['bem700', 'be m700'],
    description: 'Best Ergo build for Remington Model 700',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best Ergo **M700**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%n762** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/7ZtZkJ1F/bem700.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 71\nVertical Recoil: 82\nHorizontal Recoil: 296\nAccuracy: 0.75 MOA**",
                    inline: true,
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.m70020 + config.shrewd + config.modx + config.modxhg + config.casv6 + config.fortisg + config.modxmount + config.mbus + config.hogue + config.ca2 + config.prsgen3 + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};