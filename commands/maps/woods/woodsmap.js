const config = require("../../config.json")

module.exports = {
    name: 'woodsmap',
    cooldown: 30,
    aliases: ['wmap'],
    description: 'Detailed map of woods',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Detailed Woods map',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'A useful woods map.',
            image: {
                url: "https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/0/05/Glory4lyfeWoods_map_v4_marked.png?version=c8013bc33cac57aac03a780f93daf13c"
            },
            fields: [{
                name: 'Type "%woodsinfo" to get detailed info about the area',
                value: "Made for **0.12.3**\nMap is still mostly valid."
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};