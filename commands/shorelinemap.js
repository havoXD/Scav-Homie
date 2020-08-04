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
                url: "https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/5/5c/Escape_from_Tarkov_Factory_Map_by_stealtheh.jpg?version=2710f1b141acdd8916616205fe6b7370"
            },
            fields: [{
                name: 'Type "%shorelineinfo" to get detailed info about the area',
                value: "Made for **0.12.0**\nMap is still valid."
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};