const config = require("../../config.json")

module.exports = {
    name: 'reserved2',
    cooldown: 30,
    aliases: ['rezervd2', 'reserved2bunker'],
    description: 'A map of the underground D-2 Bunker .',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Reserve Underground D-2 Bunker',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Map of UG D-2 Bunker',
            image: {
                url: "https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/7/7c/Reserve_underground_mapping2.png/800px-Reserve_underground_mapping2.png?version=ed4f07f5a8d909fc0dba6002fa78544f"
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