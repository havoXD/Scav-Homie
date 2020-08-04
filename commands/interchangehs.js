const config = require("./config.json")

module.exports = {
    name: 'interchangehs',
    cooldown: 30,
    aliases: ['ichs', 'interchangehiddenstashes', 'interchangehiddencaches'],
    description: 'help for finding the Interchange hidden stashes.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Interchange Hidden Stashes.',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: '**Locations of all hiddenstashes**',
            image: {
                url: "https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/f/fe/Interchange_hidden_stash_map.jpg/553px-Interchange_hidden_stash_map.jpg?version=e315f5296b05945c14c3a4b3e3f81d10"
            },
            fields: [{
                name: 'Type "%interchangeinfo" to get detailed info about the area',
                value: "Made for **0.12.0**\nMap is still valid."
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};