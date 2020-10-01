const config = require("../../config.json")

module.exports = {
    name: 'reserve',
    cooldown: 30,
    aliases: ['rezerv', 'reservemaps'],
    description: 'A overview of all reserve commands.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'reserve maps commands.',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: '**The different types of maps**',
            image: {
                url: "https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/b/b6/Reserve_top_view.jpg"
            },
            fields: [{
                name: 'Type "%reserveinfo" to get detailed info about the area',
                value: "Detailed map: **%reservemap**\nDetailed map with key guide: **%reservekey**\nUnderground radio station: **%reserveradio**\nD-2 bunker map: **%reserved2**\nUnderground map: **%reserveug**"
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};