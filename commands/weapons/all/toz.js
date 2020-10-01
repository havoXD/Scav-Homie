const config = require("../../config.json")

module.exports = {
    name: 'toz',
    cooldown: 30,
    aliases: ['toz106', 'toz-106', 'brtoz', 'brtoz106', 'brtoz-106', 'betoz', 'betoz106', 'betoz-106', 'btoz', 'btoz106', 'btoz-106'],
    description: 'Builds for TOZ-106',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Builds for **TOZ-106**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%12gb** and/or **%12gs** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/GpgyGXvw/toz106.png',
            },
            fields: [{
                    name: 'Best Recoil Stats',
                    value: "**Ergo: 65\nVertical Recoil: 343\nHoriz Recoil: 286\nAccuracy: 18.91 MOA**",
                    inline: true,
                },
                {
                    name: 'Best Ergo Stats',
                    value: "**Ergo: 70\nVertical Recoil: 351\nHoriz Recoil: 292\nAccuracy: 18.91 MOA**",
                    inline: true,
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.tozstock + config.mosin + config.tozmount + config.tozsmount + config.ekp18 + config.shade + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};