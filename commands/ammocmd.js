const config = require("./config.json")

module.exports = {
    name: 'ammocmd',
    cooldown: 30,
    aliases: [ 'ammunitioncmd', 'ammunition'],
    description: 'A command that gives an overview of Scav Homies commands.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Ammunition Commands',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Commands for each and every caliber',
            fields: [{
                name: '**Commands**',
                value: "**5.45x39** - `545` or `b545`\n**5.56x45** - `556` or `b556`\n**7.62x39** - `762` or `b762`\n**7.62x51** - `n762` or `bn762`\n**7.62x54r** - `r762` or `br762`\n**.366 TKM** - `366` or `b366`\n**12.7x55** - `b127` or `b127`\n**4.6x30** - `46` or `b46`\n**5.7x28** - `a57` or `ba57`\n**7.62x25** - `t762` or `bt762`\n**9x18** - `918` or `b918`\n**9x19** - `919` or `b919`\n**9x21** - `921` or `b921`\n**.45 ACP** - `45` or `b45`\n**12x70 Buckshot** - `12gb` or `b12gb`\n**12x70 Slug** - `12gs` or `b12gs`\n**20x70 Buckshot** - `20gb` or `b20gb`\n**20x70 Slug** - `20gs` or `b20gs`\n**23x75/4 Gauge** - `4g` or `b4g`\n",
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};