const config = require("../../config.json")

module.exports = {
    name: 'reservekey',
    cooldown: 30,
    aliases: ['rezervkey', 'rkey'],
    description: 'A guide that shows where each key on reserve goes.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Reserve key guide',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: '**What each key unlocks**',
            image: {
                url: "https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/9/9f/Keys_and_doors_v3.png/800px-Keys_and_doors_v3.png?version=2cb6d8d74e6f3a52b8af30ca93bc86f5"
            },
            fields: [{
                name: 'Type "%reserveinfo" to get detailed info about the area',
                value: "Map for **0.12.1**\nMap is still mostly valid."
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};