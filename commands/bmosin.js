const config = require("./config.json")

module.exports = {
    name: 'bmosin',
    cooldown: 30,
    aliases: ['b mosin'],
    description: 'Budget build for Mosin',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Budget **Mosin**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%r762** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/zD62G6gt/bmosin.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 0.9999999\nVertical Recoil: 172\nHorizontal Recoil: 497\nAccuracy: 1.31 MOA**",
                    inline: true,
                },
                {
                    name: 'Notes',
                    value: "This build is based on on the sniper variant.\nThe infantry variant is not able to have the same scope mount on it so it is best to just run it as it is.",
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.mosin730 + config.mosin + config.kochetov + config.pumount + config.pu + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};