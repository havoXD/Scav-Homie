const config = require("../../config.json")

module.exports = {
    name: 'reserveinfo',
    cooldown: 30,
    aliases: ['rinfo', 'rezervinfo'],
    description: 'Detailed info about reserve',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Reserve Detailed Information',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Useful info',
            image: {
                url: "https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/6/62/Gluhar_Spawn_Locations.png/800px-Gluhar_Spawn_Locations.png?version=e56925c37e6e3d9b5bbc7f7fc6323d90"
            },
            fields: [{
                    name: 'Description',
                    value: "The secret Federal State Reserve Agency base that, according to urban legends, contains enough supplies to last for years: food, medications and other resources, enough to survive an all-out nuclear war."
                },
                {
                    name: 'Features',
                    value: "Mounted, static weaponry in the form of the\n[AGS grenade launcher](https://escapefromtarkov.gamepedia.com/AGS_30x29_mm_automatic_grenade_launcher) and [NSV machine gun](https://escapefromtarkov.gamepedia.com/NSV_%22Utes%22_12.7x108_machine_gun)."
                },
                {
                    name: 'Boss',
                    value: '**Name:** Glukhar\n\n**Locations:** marked circles on the map\nIn and around the "K" Buildings near the train station.\nIn and around the "Bishop", "Pawn", and "Knight" Dorms.\nIn and around the Repair Depot.\n**as of 0.12.6**\n\n**Health:** 990 Total, Head: 70, Thorax: 200,\nStomach: 140, Arms: 145 each, Legs: 145 each.\n\n**Followers:** up to 6 with a wide assortment of gear.'
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