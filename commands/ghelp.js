const config = require("./config.json");

module.exports = {
    name: 'help',
    cooldown: 30,
    aliases: ['commands'],
    description: 'Help command',
    guildOnly: true,

    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: "**Scav Homie's commands**",
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Leave suggestions to havoX#7808',
            fields: [{
                    name: '**Commands**',
                    value: "**Prefix is %**\n`New` - What is new? (big updates)\n`Ammocmd` - Shows ammo commands.\n`Weaponcmd` - Explanation of Weapon build commands.\n`Maps` - Shows map commands.",
                    inline: true,
                },
                {
                    name: '**Version 0.1.1**',
                    value: "**Last Updated** - `01/10-20`\n`Latest` - Shows latest fixes/additions (small updates)",
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};