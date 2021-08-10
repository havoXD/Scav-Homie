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
            title: '0.1.2 Fixes/Additions',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: "For 0.12.8",
            fields: [{
                    name: '**0.1.21**',
                    value: "```Project picked up again to get some stuff ready in advance for **0.13**\nMade Scav Homie a **open-source project** (%github) and did some updating on ammunition statistics.\nWeapon builds are still out of date.```",
                },
                {
                    name: '**Appreciation letter**',
                    value: "Again thanks to everyone that have been using my bot and especially to those who have given feedback and showed their support.\n\nThe bot has been added to 400+ servers as of 10/08-21!\nPlease share the bot with people who you think might find it useful and encourage admins to add it if you are on a bigger server :)\n\n**To 500 servers we go.**",
                },

            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};