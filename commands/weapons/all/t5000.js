const config = require("../../config.json")

module.exports = {
    name: 't5000',
    cooldown: 30,
    aliases: ['t-5000', 'orsist5000', 'orsist-5000', 'orsis t-5000', 'orsis t5000', 'bt-5000', 'borsist5000', 'borsist-5000', 'borsis t-5000', 'borsis t5000', 'brt-5000', 'brorsist5000', 'brorsist-5000', 'brorsis t-5000', 'brorsis t5000', 'bet-5000', 'beorsist5000', 'beorsist-5000', 'beorsis t-5000', 'beorsis t5000', 'bat-5000', 'baorsist5000', 'baorsist-5000', 'baorsis t-5000', 'baorsis t5000'],
    description: 'Build for Orsis T-5000',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Build for the **T-5000**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%n762** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/RFxcmY4J/t5000.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 49\nVertical Recoil: 81\nHorizontal Recoil: 309\nAccuracy: 0.65 MOA**",
                    inline: true,
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.fortisRed + config.nf30 + config.burrisff + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};