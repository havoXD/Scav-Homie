const config = require("./config.json")

module.exports = {
    name: 'customs',
    cooldown: 30,
    aliases: ['custom', 'customsmaps'],
    description: 'A overview of all customs commands.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Customs maps commands.',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: '**The different types of maps**',
            image: {
                url: "https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/4/40/Customs07.png/600px-Customs07.png?version=575b8287fdd63c589eaae4b087596544"
            },
            fields: [{
                name: 'Type "%customsinfo" to get detailed info about the area',
                value: "Detailed map: **%customsmap**\nGuide for hidden stashes: **%customshs**\nInteractive map: **%customsim**\nDorms map: **%customsdorms**"
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};