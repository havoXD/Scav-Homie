const config = require("../../config.json")

module.exports = {
    name: 'reserveradio',
    cooldown: 30,
    aliases: ['rezervradio', 'reserver'],
    description: 'A map of the underground radio station .',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Reserve Underground Radio Station',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Map of UG Radio Station',
            image: {
                url: "https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/b/ba/Underground_Radio_Tower_Map_v1.1.jpg/800px-Underground_Radio_Tower_Map_v1.1.jpg?version=64310f53a3c5b8003b1332070d448678"
            },
            fields: [{
                name: 'Type "%reserveinfo" to get detailed info about the area',
                value: "Map for **0.12.2**\nMap is still valid."
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};