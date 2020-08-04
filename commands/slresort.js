const config = require("./config.json")

module.exports = {
    name: 'slresort',
    cooldown: 30,
    aliases: ['slr', 'resort'],
    description: 'a overview map of the inside area in resort on shoreline.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Shoreline Resort',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: '**Resort guide**',
            image: {
                url: "https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/3/34/UNKSO_Shoreline_Resort_Loot_Map_VER_2.0.png/800px-UNKSO_Shoreline_Resort_Loot_Map_VER_2.0.png?version=6f911f8533257a619d7b3a8689bc3b58"
            },
            fields: [{
                name: 'Type "%customsinfo" to get detailed info about the area',
                value: "Made for **0.11.7**\nMap is still mostly valid."
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};