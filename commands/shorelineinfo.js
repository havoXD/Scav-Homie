const config = require("./config.json")

module.exports = {
    name: 'shorelineinfo',
    cooldown: 30,
    aliases: ['slinfo'],
    description: 'Detailed info about shoreline',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Shoreline Detailed Information',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Useful info',
            image: {
                url: "https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/a/a1/Sanitar_Map.png/800px-Sanitar_Map.png?version=d52c267fd8e1b0f9fb568656b6508f6a"
            },
            fields: [{
                    name: 'Description',
                    value: "Points of interest on this map include a partially abandoned village, a modern residential development, a boating facility, a gas station, a weather station, a cellular communications tower and the focal point of the map, the Azure Coast Health Resort. This luxury compound consists of three multi-story buildings and was once used as temporary accommodation by members of TerraGroup and its associated divisions as they prepared for the evacuation of Tarkov Port. When operational, the resort draws power from a nearby hydroelectric plant."
                },
                {
                    name: 'Features',
                    value: "Shoreline is the second largest location in Escape from Tarkov and contains a plethora of areas for players to explore and loot. The large, varied terrain means players can expect to engage in fire fights at both close quarters and long range."
                },
                {
                    name: 'Boss',
                    value: '**Name:** Sanitar\n\n**Location:** marked circles on the map\nPort/Pier Area\nLocked cottage area\nHealth resort east and west wing\n**as of 0.12.7**\n\n**Health:** **1270 Total**\nHead: __70__, Thorax: __360__, Stomach: __140__, Arms: __120__, Legs: __230__ \n\n**Followers:** Two well armored guards.'
                },
                {
                    name: 'Suggestions',
                    value: "Leave suggestions about what else would be nice to have inside of this command."
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};