const config = require("./config.json")

module.exports = {
    name: 'maps',
    cooldown: 30,
    aliases: ['allmaps'],
    description: 'A overview of all map commands.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'A overview of all map commands.',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Commands for mapguides',
            image: {
                url: "https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/4/43/Map.png/687px-Map.png?version=bfb5aa326fd22f7f1088797294e21979"
            },
            fields: [{
                name: 'Type "%(mapname)" to see commands for each area',
                value: "Every area in game has different type of maps that could be useful for different things.\nScav Homie has picked a number of useful maps for each area that he thinks are useful.\n\nFactory: Detailed map\nWoods: Detailed map, hidden stashes guide and a interactive map\nCustoms: Detailed map, hidden stashes guide, interactive map and a dorms map.\nShoreline: Detailed map, hidden stashes guide, key spawns map and a resort map.\nInterchange: Detailed map and a hidden stashes guide.\nThe Lab: Detailed map and maps of each floor.\nReserve: Detailed map, Detailed map with key guide, underground radio station and D-2 Bunker map. "
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};