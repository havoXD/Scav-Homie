const config = require("./config.json")

module.exports = {
    name: 'ppsh',
    cooldown: 30,
    aliases: ['ppsh41', 'ppsh-41', 'beppsh-41', 'beppsh41', 'beppsh', 'brppsh-41', 'brppsh41', 'brppsh', 'bppsh-41', 'bppsh41', 'bppsh'],
    description: 'PPSH command',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'The **PPSH**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%tt762** for info about ammo',
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 36\nVertical Recoil: 47\nHorizontal Recoil: 220**",
                    inline: true,
                },
                {
                    name: '**The gun**',
                    value: "The **PPSH** does not have any mods that can be put on it as of now."
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};