const config = require("./config.json")

module.exports = {
    name: 'reserveug',
    cooldown: 30,
    aliases: ['rezervug', 'reserveunderground'],
    description: 'A map of the underground on reserve.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Reserve Underground',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Map of the whole underground area.',
            image: {
                url: "https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/7/7c/Reserve_underground_mapping2.png/800px-Reserve_underground_mapping2.png?version=ed4f07f5a8d909fc0dba6002fa78544f"
            },
            fields: [{
                name: 'Type "%reserveinfo" to get detailed info about the area',
                value: "Map for **0.12.7**"
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};