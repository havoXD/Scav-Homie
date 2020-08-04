const config = require("./config.json")

module.exports = {
    name: 'interchangeinfo',
    cooldown: 30,
    aliases: ['icinfo'],
    description: 'Detailed info about interchange',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Interchange Detailed Information',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Useful info',
            fields: [{
                    name: 'Description',
                    value: "The South interchange is a key location for transport in the city. This strategic area connects the port and harbour with the industrial outskirts of Tarkov. Located in the center of the interchange is a huge ULTRA shopping mall which was used as the main base of operation for the EMERCOM evacuation."
                },
                {
                    name: 'Features',
                    value: "Three anchor stores:\n**IDEA** (a furniture store)\n**OLI** (a hardware store)\n**Goshan** (a grocery store).\n\nMany small stores that sell a wide variety of products including electronics, clothing, exercise equipment, firearms, and food.\n\nA fully linked illumination grid, able to be switched on at the [power station.](https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/8/83/Inter_alarm_terminal.png/800px-Inter_alarm_terminal.png?version=1d196c8cd2fef0a7d34290d0775e367c)\n\nAlarms around some stores and a triggerable alarm at the Kiba Arms Store. The alarms can be switched off at designated terminals:"
                },
                {
                    name: 'Alarm switches',
                    value: "[2F switch](https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/8/83/Inter_alarm_terminal.png/800px-Inter_alarm_terminal.png?version=1d196c8cd2fef0a7d34290d0775e367c) and [1F switch](https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/a/aa/Inter_alarm_terminal_2.png/450px-Inter_alarm_terminal_2.png?version=1493e24b307d5b34123d376d386a8f6d)\n[Location of the switches](https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/e/ec/Interchange_alarm_map.png/747px-Interchange_alarm_map.png?version=cd2e97d0efcd24ddf6d313271559bf6f)"
                },
                {
                    name: 'Boss',
                    value: '**Name:** Killa\n\n**Location:**\nPatrolling on the 1st floor of the mall near the escalators\n**as of 0.12.6**\n\n**Health:** 830 Total, Head: 70, Thorax: 170,\nStomach: 150, Arms: 100 each, Legs: 120 each.\n\n**Followers:** Killa has no followers of any sort.'
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