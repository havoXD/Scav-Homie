const config = require("./config.json")

module.exports = {
    name: 'tt',
    cooldown: 30,
    aliases: ['brtt', 'bett', 'btt', 'ttpistol'],
    description: 'Build for TT',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Build for **TT**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%12gb** and/or **%12gs** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/j5x6KWKv/tt.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 82\nVertical Recoil: 564\nHoriz Recoil: 282**",
                    inline: true,
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.dtktt + config.dlp + config.razor + config.tt121 + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};