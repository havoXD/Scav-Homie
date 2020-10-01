const config = require("../../config.json")

module.exports = {
    name: 'shorelinekey',
    cooldown: 30,
    aliases: ['slkey', 'slkeyspawns'],
    description: 'A guide that shows where keys spawns on shoreline',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Shoreline key spawns guide',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Key spawns map',
            image: {
                url: "https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/7/7e/ShorelineKeySpawnsByStealtheh.jpg/800px-ShorelineKeySpawnsByStealtheh.jpg?version=fb8da2fcc75f13e705c01452d9ed2f30"
            },
            fields: [{
                name: 'Type "%shorelineinfo" to get detailed info about the area',
                value: "Map for **0.11.7**\nMap is still mostly valid."
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};