const config = require("./config.json")

module.exports = {
    name: 'customshs',
    cooldown: 30,
    aliases: ['customhs', 'customshiddenstashes', 'customshiddencaches'],
    description: 'help for finding the Customs hidden stashes.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Customs Hidden Stashes.',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: '**Locations of all hiddenstashes**',
            image: {
                url: "https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/7/7e/Customs_Hidden_Stashes.jpg/793px-Customs_Hidden_Stashes.jpg?version=55d4f2174c4e4488fcb9ac7eb58fc7a1"
            },
            fields: [{
                name: 'Type "%customsinfo" to get detailed info about the area',
                value: "Made for **0.12.0**\nMap is still valid."
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};