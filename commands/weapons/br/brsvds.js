const config = require("../../config.json")

module.exports = {
    name: 'brsvds',
    cooldown: 30,
    aliases: ['brsvd', 'br svds'],
    description: 'Best Recoil build for SVDS',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best Recoil **SVDS**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%r762** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/xjJ2hcdf/brsvds.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 22\nVertical Recoil: 129\nHorizontal Recoil: 285**",
                    inline: true,
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.svdmod + config.mlok4 + config.rk2 + config.thread + config.svdsup + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};