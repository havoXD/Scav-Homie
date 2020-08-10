const config = require("./config.json")

module.exports = {
    name: 'help',
    cooldown: 30,
    aliases: ['cmds', 'commands', 'command'],
    description: 'A command that gives an overview of Scav Homies commands.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Scav Homie Commands',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Leave suggestions to havoX#7808',
            fields: [{
                    name: '**Commands**',
                    value: "**GO UPVOTE MY [->REDDIT POST<-](https://www.reddit.com/r/EscapefromTarkov/comments/i7ajqt/scav_homie_eft_discord_info_and_helper_bot/) THANKS**\nPrefix is **%**\n`new` - What is new?\n`Ammocmd` - shows ammo commands\n`weaponcmd` - shows commands for weapon builds.\n`Maps` - shows map commands",
                },
                {
                    name: '**Bot version 0.1.0**',
                    value: "**Last Updated** - `10/08-20`",
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};