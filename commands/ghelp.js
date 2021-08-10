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
                    value: "**ATTENTION**\nDeveloper is back. Bot is now **open-source on github.**\nType `%github` to get to the repo.\n**Thanks in advance for any help :)**\n**Prefix is %**\n`New` - What is new? (big updates)\n`Ammocmd` - Shows ammo commands.\n`Weaponcmd` - Explanation of Weapon build commands.\n`Maps` - Shows map commands.\n`Donate` - If you want to donate :)",
                    inline: true,
                },
                {
                    name: '**Version 0.1.21**',
                    value: "**Last Updated** - `10/08-21`\n`Latest` - Shows latest fixes/additions (small updates)\n**Weapon builds are and will be out of date for a while because of recent major changes to modifications.**",
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};