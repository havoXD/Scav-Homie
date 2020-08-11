const config = require("./config.json")

module.exports = {
    name: 'customsim',
    cooldown: 30,
    aliases: ['cimmap', 'customsimmap'],
    description: 'Interactive map of customs',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Interactive Customs map',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: '[A VERY useful customs map.](https://escapefromtarkov.gamepedia.com/Customs_Interactive_Map)',
            fields: [{
                name: 'Type "%customsinfo" to get detailed info about the area',
                value: "Made for **0.12.7**"
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};