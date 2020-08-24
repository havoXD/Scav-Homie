const config = require("./config.json")

module.exports = {
    name: 'shorelinemap',
    cooldown: 30,
    aliases: ['smap'],
    description: 'Detailed map of shoreline',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Detailed shoreline map',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'A useful shoreline map.',
            image: {
                url: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/a/ac/Shoreline_Map_-_12.7.png/revision/latest?cb=20200809112828"
            },
            fields: [{
                name: 'Type "%shorelineinfo" to get detailed info about the area',
                value: "Made for **0.12.7**"
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};