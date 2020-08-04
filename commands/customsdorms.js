const config = require("./config.json")

module.exports = {
    name: 'customsdorms',
    cooldown: 30,
    aliases: ['customdorms', 'cd'],
    description: 'a overview map of the inside area in dorms on customs.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Customs Dorms',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: '**Dorms guide**',
            image: {
                url: "https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/9/96/DormRoomsMap.jpg?version=da2be3a2cd2348dd4a403731c80cf9ea"
            },
            fields: [{
                name: 'Type "%customsinfo" to get detailed info about the area',
                value: "Made for **0.12.4**\nMap is still valid."
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};