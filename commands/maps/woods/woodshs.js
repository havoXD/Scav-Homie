const config = require("../../config.json")

module.exports = {
    name: 'woodshs',
    cooldown: 30,
    aliases: ['woodhs', 'woodshiddenstashes', 'woodshiddencaches'],
    description: 'help for finding the Woods hidden stashes.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Woods Hidden Stashes.',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: '**Locations of all hiddenstashes**',
            image: {
                url: "https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/c/cd/Woods-Showcase-11.png/1123px-Woods-Showcase-11.png"
            },
            fields: [{
                name: 'Type "%woodsinfo" to get detailed info about the area',
                value: "Made for **0.12.4**\nMap is still valid."
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};