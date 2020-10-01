const config = require("../../config.json")

module.exports = {
    name: 'woodsim',
    cooldown: 30,
    aliases: ['wimmap', 'woodsimmap'],
    description: 'Interactive map of woods',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Interactive Woods map',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: '[A VERY useful woods map.](https://escapefromtarkov.gamepedia.com/Customs_Interactive_Map)',
            fields: [{
                name: 'Type "%woodsinfo" to get detailed info about the area',
                value: "Made for **0.12.3**\nMap is still valid"
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};