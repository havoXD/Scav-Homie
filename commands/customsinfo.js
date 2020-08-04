const config = require("./config.json")

module.exports = {
    name: 'customsinfo',
    cooldown: 30,
    aliases: ['cinfo', 'customsinformation'],
    description: 'Detailed info about customs',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Customs Detailed Information',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Useful info',
            image: {
                url: "https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/e/eb/Customs_Dealmaker_Haunt.png/800px-Customs_Dealmaker_Haunt.png?version=60293cdfba00a329a294391835529d2b"
            },
            fields: [{
                    name: 'Description',
                    value: "A large area of industrial park land situated adjacent to the factory. This area houses a customs terminal, fuel storage facilities, offices, and dorms as well as a variety of other infrastructure buildings."
                },
                {
                    name: 'Features',
                    value: "**The Dorms** are two buildings located in the northernmost area of the map. Each structure boasts a front entrance and a fire escape at each end with doorways leading to each floor (some of which are blocked or permanently locked).\n\n**Construction** is a two story concrete frame of a building. This structure has a wide view of the river crossing and bridge. A mounted LMG and some cover has recently been added to the 2nd story of the concrete frame.\n\n**Military Checkpoint** is at the end of the road past the Gas Station. This point has many Scavs and is the only location with easy access through the wall to the extraction zones.\n\nMultiple [NSV machine guns](https://escapefromtarkov.gamepedia.com/NSV_%22Utes%22_12.7x108_machine_gun) and a [AGS grenade launcher](https://escapefromtarkov.gamepedia.com/AGS_30x29_mm_automatic_grenade_launcher) have recently been added to the expanded area of the map."
                },
                {
                    name: 'Boss',
                    value: '**Name:** Reshala\n\n**Locations:** marked circles on the map\nIn the "Dorms" or the "New Gas Station"\nRarely at the tower north of the "New Gas Station"\nRarely at the passage between Checkpoint Woods and Sub-Station\n**as of 0.12.6**\n\n**Health:** 740 Total, Head: 62, Thorax: 138,\nStomach: 120, Arms: 100 each, Legs: 110 each.\n\n**Followers:** up to 4 with decent gear.'
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