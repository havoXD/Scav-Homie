const config = require("../../config.json")

module.exports = {
    name: 'shoreline',
    cooldown: 30,
    aliases: ['sl', 'shorelinemaps'],
    description: 'A overview of all shoreline commands.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Shoreline maps commands.',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: '**The different types of maps**',
            image: {
                url: "https://gamenewsplus.net/wp-content/uploads/2017/11/1-4-1.jpg"
            },
            fields: [{
                name: 'Type "%shorelineinfo" to get detailed info about the area',
                value: "Detailed map: **%shorelinemap**\nGuide for hidden stashes: **%shorelinehs**\nKey spawns map: **%shorelinekey**\nResort map: **%slresort**\nInteractive map: **%shorelineim**"
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};