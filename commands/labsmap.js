const config = require("./config.json")

module.exports = {
    name: 'labsmap',
    cooldown: 30,
    aliases: ['labmap', 'thelabsmap'],
    description: 'Detailed map of labs',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Detailed labs map',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'A useful labs map.',
            image: {
                url: "https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/6/6d/The_Lab_3D_map_by_SteelSmith_TTV.png/800px-The_Lab_3D_map_by_SteelSmith_TTV.png?version=eac76b7104ce4c4e38dac1cfb0b01906"
            },
            fields: [{
                name: 'Type "%labsinfo" to get detailed info about the area',
                value: "Made for **0.12.5**\nMap is still valid."
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};