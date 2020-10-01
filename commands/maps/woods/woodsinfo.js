const config = require("../../config.json")

module.exports = {
    name: 'woodsinfo',
    cooldown: 30,
    aliases: ['winfo', 'woodinfo'],
    description: 'Detailed info about woods',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Woods Detailed Information',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Useful info',
            image: {
                url: "https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/7/74/Woods-Showcase-14.png/1123px-Woods-Showcase-14.png"
            },
            fields: [{
                    name: 'Description',
                    value: "The Priozersk Natural Reserve recently became part of the state-protected wildlife reserves of the North Western Federal District."
                },
                {
                    name: 'Features',
                    value: "A moderately sized section of woods with some open fields, small hills, a logging camp, and the bunkers [ZB-014](https://escapefromtarkov.gamepedia.com/Key_ZB-014) and [ZB-016](https://escapefromtarkov.gamepedia.com/ZB-016)."
                },
                {
                    name: 'Boss',
                    value: '**Name:** Shturman\n\n**Locations:**\nHe typically spawns in and around the Lumber Mill in the center of the map, rarely leaving the grounds.\n**as of 0.12.6**\n\n**Health:** 792 Total, Head: 62, Thorax: 160,\nStomach: 150, Arms: 100 each, Legs: 110 each.\n\n**Followers:** 2 with big caliber guns and high-end/decent armor.'
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