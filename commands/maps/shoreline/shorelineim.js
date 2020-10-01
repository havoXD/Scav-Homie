const config = require("../../config.json")

module.exports = {
    name: 'shorelineim',
    cooldown: 30,
    aliases: ['sim', 'shoreline interactive map'],
    description: 'A interactive shoreline map',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Interactive map',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Useful for callouts and locations of items and AI enemies',
            fields: [{
                name: 'Type "%shorelineinfo" to get detailed info about the area',
                value: "Made for **0.12.7** [Interactive map](https://mapgenie.io/tarkov/maps/shoreline)"
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};