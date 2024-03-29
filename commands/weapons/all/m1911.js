const config = require("../../config.json")

module.exports = {
    name: 'm1911',
    cooldown: 30,
    aliases: ['m1911a1', 'coltm1911', 'bem1911', 'bem1911a1', 'becoltm1911', 'brm1911', 'brm1911a1', 'brcoltm1911', 'bm1911', 'bm1911a1', 'bcoltm1911','m45a1','bm45a1','brm45a1','bem45a1'],
    description: 'M1911A1 and M45A1 command',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Build for the **M1911A1** and **M45A1**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%45acp** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/XqGCkddd/m1911.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 82\nVertical Recoil: 456\nHorizontal Recoil: 305**",
                    inline: true,
                },
                {
                    name: '**Mod List**',
                    value: config.topTable + config.pachm19 + config.wilson + config.stihex + config.caspian + config.anarchy + config.weigand + config.fnrmr + config.rmr + config.mecgar + config.endTable,
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};