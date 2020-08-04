const config = require("./config.json")

module.exports = {
    name: 'labs1',
    cooldown: 30,
    aliases: ['labs1st', 'thelabs1', 'labs1stfloor', 'thelabs1stfloor', 'labs1f', ],
    description: 'Detailed map of labs',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Detailed Map of Labs 1st Floor',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Closer look at 1st floor',
            image: {
                url: "https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/3/35/TheLabFirstFloorByLogiwonk.png/800px-TheLabFirstFloorByLogiwonk.png?version=ac27da64f06e4786fd57bd928e9afee7"
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