const config = require("../../config.json")

module.exports = {
    name: 'labsinfo',
    cooldown: 30,
    aliases: ['linfo', 'labinfo', 'thelabinfo'],
    description: 'Detailed info about The Lab',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'The Lab Detailed Information',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Useful info',
            image: {
                url: "https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/2/24/Labs-Showcase-2.png/1123px-Labs-Showcase-2.png"
            },
            fields: [{
                    name: 'Description',
                    value: "Underground laboratory complex TerraGroup Labs is a secret object right under the center of Tarkov. Officially, this research center does not exist and, based on data scraps, is engaged in R&D, testing and simulation projects in chemistry, physics, biology, and high-tech areas."
                },
                {
                    name: 'Features',
                    value: "**Insurance** does not work on labs.\n**Announcer**: Whenever and event of high importance happens an announcement is triggered.\nThis does not happen for **Ventilation shaft** and **Sewage conduit**. It can be disabled for **Parking** using the **Yellow keycard**.\nYou can not go with your scav on labs."
                },
                {
                    name: 'Boss',
                    value: 'There is no boss on this map but every single AI is a [Raider](https://escapefromtarkov.gamepedia.com/Scav_Raiders). They are way more dangerous and carry better gear.'
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