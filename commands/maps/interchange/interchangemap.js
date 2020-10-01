const config = require("../../config.json")

module.exports = {
    name: 'interchangemap',
    cooldown: 30,
    aliases: ['imap'],
    description: 'Detailed map of interchange',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Detailed Interchange map',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'A useful interchange map.',
            image: {
                url: "https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/e/e5/InterchangeMap_Updated_4.24.2020.png/800px-InterchangeMap_Updated_4.24.2020.png?version=c1114bd10889074ca8c8d85e3d1fb04b"
            },
            fields: [{
                name: 'Type "%interchangeinfo" to get detailed info about the area',
                value: "Made for **0.12.4**\nMap is still valid."
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};