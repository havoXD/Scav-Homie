const config = require("./config.json")

module.exports = {
    name: 'brmp133',
    cooldown: 30,
    aliases: ['brmp-133', 'br mp-133', 'bestrecoilmp133'],
    description: 'Best recoil build for MP-133',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best recoil build **MP-133**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%12gb** and/or **%12gs** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/SRNbB8Nk/brmp133.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 36\nVertical Recoil: 101\nHorizontal Recoil: 127\nAccuracy: 23.03 MOA**",
                    inline: true,
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.mp133750 + config.mecyl + config.monster + config.customhg + config.rk2 + config.satt + config.ag58 + config.agr870 + config.hke1 + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};