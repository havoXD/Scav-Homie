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
                name: 'Type "%(mapname)"',
                value: "Every area in game has different type of maps that could be useful for different things.\nScav Homie has picked a number of useful maps for each area that he thinks are useful.\n\n```Factory:\nDetailed map\n\nWoods:\nDetailed map\nHidden stashes guide\nInteractive map\n\nCustoms:\nDetailed map\nHidden stashes guide\nInteractive map\nDorms map\n\nShoreline:\nDetailed map\nHidden stashes guide\nKey spawns map\nResort map\nInteractive map\n\nInterchange:\nDetailed map\nHidden stashes guide\n\nThe Lab:\nDetailed map\nMaps of each floor\n\nReserve: Detailed map\nDetailed map with key guide\nUnderground radio station\nD-2 Bunker map``` "
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};