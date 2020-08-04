const config = require("./config.json")

module.exports = {
    name: 'ba590',
    cooldown: 30,
    aliases: ['bam590', 'bam590a1', 'bamossberg590a1', 'bamossberg', 'bamossberg590'],
    description: 'Best accuracy build for Mossberg 590A1',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best accuracy **Mossberg 590A1**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%12gb** and/or **%12gs** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/K8h5B3td/ba590.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 44\nVertical Recoil: 302\nHorizontal Recoil: 336\nAccuracy: 16.45 MOA**",
                    inline: true,
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.rb7m + config.exps3 + config.perst3 + config.la5 + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};