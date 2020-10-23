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
                    value: "**Prefix is %**\n`New` - What is new? (big updates)\n`Ammocmd` - Shows ammo commands.\n`Weaponcmd` - Explanation of Weapon build commands.\n`Maps` - Shows map commands.\n`Donate` - If you want to donate :)",
                    inline: true,
                },
                {
                    name: '**Version 0.1.2**',
                    value: "**Last Updated** - `23/10-20`\n`Latest` - Shows latest fixes/additions (small updates)\n\nThe bot has been added to 300 servers!\nThanks a lot to everyone who added it or encouraged their server mods to add the bot I appreciate it a lot and expect a big update during the coming weeks :)\n",
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};