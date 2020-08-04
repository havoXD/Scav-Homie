const config = require("./config.json")

module.exports = {
    name: 'shorelinehs',
    cooldown: 30,
    aliases: ['slhs', 'shorelinehiddenstashes', 'shorelinehiddencaches'],
    description: 'help for finding the Shoreline hidden stashes.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Shoreline Hidden Stashes.',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: '**Locations of all hiddenstashes**',
            image: {
                url: "https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/9/9c/Shoreline_Hidden_Stashes_Map.png/800px-Shoreline_Hidden_Stashes_Map.png?version=97fc7212c98899714cf3bb9fe59c084d"
            },
            fields: [{
                name: 'Type "%shorelineinfo" to get detailed info about the area',
                value: "Made for **0.12.6**\nMap is still valid."
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};