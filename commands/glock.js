const config = require("./config.json")

module.exports = {
    name: 'glock',
    cooldown: 30,
    aliases: [, 'glock17', 'glock18c', 'glock 17', 'glock 18c', 'bglock17', 'bglock18c', 'bglock 17', 'bglock 18c', 'brglock17', 'brglock18c', 'brglock 17', 'brglock 18c', 'beglock17', 'beglock18c', 'beglock 17', 'beglock 18c', ],
    description: 'Builds for the Glock 17 and Glock 18C',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Builds for **Glock 17 & Glock 18C**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%919** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/MKph70Ph/glock17.png',
            },
            fields: [{
                    name: 'Glock 17',
                    value: "**Ergo: 100\nVertical Recoil: 128\nHorizontal Recoil: 91**",
                    inline: true,
                },
                {
                    name: 'Glock 18C',
                    value: "**Ergo: 100\nVertical Recoil: 198\nHorizontal Recoil: 157**",
                    inline: true,
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.glr17 + config.space + config.g17 + config.zev + config.salient + config.g4 + config.space + config.g18 + config.pach + config.endTable) + '\n**Glock 17 ↓↓↓**',
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};