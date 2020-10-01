const config = require("../../config.json")

module.exports = {
    name: 'interchange',
    cooldown: 30,
    aliases: ['ic', 'interchangemaps'],
    description: 'A overview of all interchange commands.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'interchange maps commands.',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: '**The different types of maps**',
            image: {
                url: "https://i.imgur.com/uYXcQx9.jpg"
            },
            fields: [{
                name: 'Type "%interchangeinfo" to get detailed info about the area',
                value: "Detailed map: **%interchangemap**\nGuide for hidden stashes: **%interchangehs**"
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};