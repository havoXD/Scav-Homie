const config = require("../../config.json")

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
                url: "https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/5/55/CustomsLargeExpansionGloryMonki.png?version=05e8ef2534c9023c2000b724a1f0c7f8"
            },
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