const config = require("../../config.json")

module.exports = {
    name: 'vpo215',
    cooldown: 30,
    aliases: [, 'vpo-215', 'bvpo215', 'bevpo215', 'brvpo215', 'bavpo215', 'molotvpo', 'molotvpo215', 'molotvpo-215', 'bmolotvpo', 'bmolotvpo215', 'bmolotvpo-215', 'bvpo-215', 'brmolotvpo', 'brmolotvpo215', 'brmolotvpo-215', 'brvpo-215', 'bemolotvpo', 'bemolotvpo215', 'bemolotvpo-215', 'bevpo-215', 'bamolotvpo', 'bamolotvpo215', 'bamolotvpo-215', 'bavpo-215'],
    description: 'Build for vpo-215',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Build for **VPO-215**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%12gb** and/or **%12gs** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/9MLdfWQ2/vpo215.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 20\nVertical Recoil: 105\nHoriz Recoil: 252\nAccuracy: 1.74 MOA**",
                    inline: true,
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.vposup + config.elcan + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};