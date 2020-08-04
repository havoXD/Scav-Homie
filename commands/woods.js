const config = require("./config.json")

module.exports = {
    name: 'woods',
    cooldown: 30,
    aliases: ['wood', 'woodsmaps'],
    description: 'A overview of all woods commands.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Woods maps commands.',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: '**The different types of maps**',
            image: {
                url: "https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/c/cd/Woods-Showcase-11.png/1123px-Woods-Showcase-11.png"
            },
            fields: [{
                name: 'Type "%woodsinfo" to get detailed info about the area',
                value: "Detailed map: **%woodsmap**\nGuide for hidden stashes: **%woodshs**\nInteractive map: **%woodsim**"
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};