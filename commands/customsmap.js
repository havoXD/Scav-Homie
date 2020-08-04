const config = require("./config.json")

module.exports = {
    name: 'customsmap',
    cooldown: 30,
    aliases: ['cmap'],
    description: 'Detailed map of customs',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Detailed Customs map',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'A useful customs map.',
            image: {
                url: "https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/c/c8/Customs_Nuxx_20190106_1.2.png?version=a3b44edf49616eaad2736c6523c977b0"
            },
            fields: [{
                name: 'Type "%customsinfo" to get detailed info about the area',
                value: "Made for **0.12.2**\nMap is missing recently expanded area."
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};