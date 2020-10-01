const config = require("../../config.json")

module.exports = {
    name: 'mp443',
    cooldown: 30,
    aliases: ['mp-443', 'bmp443', 'bmp-443', 'brmp443', 'bemp-443', 'brmp-443', 'bemp443', 'grach', 'bgrach', 'bmp443grach', 'brgrach', 'begrach', 'brmp443grach', 'bemp443grach'],
    description: 'Build for MP-443',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Build for **MP-443**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%919** for info about ammo',
            fields: [{
                    name: '**Build**',
                    value: (config.topTable + config.b8 + config.notedSpace + config.um3 + config.endTable)
                },
                {
                    name: 'Notes',
                    value: "The pistol can only have a **B-8** mount on it which allows the attachment of flashlights and a **UM3** mount that can be used for attaching compact collimators.",
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};