const config = require("./config.json")

module.exports = {
    name: 'latest',
    cooldown: 30,
    aliases: ['latestupdate'],
    description: 'A command for keeping up with the development of Scav Homie.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: '0.1.1 Fixes/Additions',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: "Sorry for not updating for a while",
            fields: [{
                    name: '**0.1.1**',
                    value: "```- Added aliases to certain commands to make sure that it\nis easier to use commands and that there is less confusion.```\n```- Fixed shotguns accuracy stat(MOA)```\n```- Added this command and planning to add a 'old' command\nthat will store updates that are more than 2 updates old.```",
                },
                {
                    name: '**Appreciation letter**',
                    value: "Again thanks to everyone that have been using my bot and especially to those who have given feedback and showed their support.\n\nI am happy to see so many people using my bot and also happy to see some of you jump in my discord.\n\nThe bot is as of 01/10-20 on 270+ servers!\nPlease share the bot with people who you think might find it useful and encourage admins to add it if you are on a bigger server :)\n\n**To 300 servers we go.**",
                },

            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};