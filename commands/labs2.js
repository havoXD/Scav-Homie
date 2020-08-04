const config = require("./config.json")

module.exports = {
    name: 'labs2',
    cooldown: 30,
    aliases: ['labs2nd', 'thelabs2', 'labs2ndfloor', 'thelabs2ndfloor', 'labs2f', 'labsbasement'],
    description: 'Detailed map of labs',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Detailed Map of Labs 2nd Floor',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Closer look at 2nd floor',
            image: {
                url: "https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/0/0f/TheLabSecondFloorByLogiwonk.png/680px-TheLabSecondFloorByLogiwonk.png?version=796833af6a6deba56fde5b6f1bc236ee"
            },
            fields: [{
                name: 'Type "%labsinfo" to get detailed info about the area',
                value: "Made for **0.11.2**\nMap is still valid."
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};