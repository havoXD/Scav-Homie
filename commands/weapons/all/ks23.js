const config = require("../../config.json")

module.exports = {
    name: 'ks23',
    cooldown: 30,
    aliases: ['ks-23', 'ks23m', 'ks23mdrozd', 'ks-23m', 'ks-23m drozd', 'ks-23mdrozd', 'ks23drozd', 'ks23mdrozd', 'ks23 drozd'],
    description: 'KS-23 builds',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'KS-23M',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type %23x75 or %b23x75 for info about ammo',
            image: {
                url: 'https://i.postimg.cc/T1FnBMQB/ks23m.png',
            },
            fields: [{
                name: 'Gun is not modifiable at the moment',
                value: "The KS-23M is not compatible with any attachments at the moment other than a different variant being available (Drozd).",
                inline: true,
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};