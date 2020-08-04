const config = require("./config.json")

module.exports = {
    name: 'labs',
    cooldown: 30,
    aliases: ['thelab', 'the lab', 'labsmaps'],
    description: 'A overview of all labs commands.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Labs maps commands.',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: '**The different types of maps**',
            image: {
                url: "https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/d/db/Labs-Showcase-10.png/1123px-Labs-Showcase-10.png"
            },
            fields: [{
                name: 'Type "%labsinfo" to get detailed info about the area',
                value: "Detailed map: **%labsmap**\nMap for each floor: **%labsb/2/3**"
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};