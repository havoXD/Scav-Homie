const config = require("./config.json")

module.exports = {
    name: 'factoryinfo',
    cooldown: 30,
    aliases: ['finfo'],
    description: 'Detailed info about factory',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Factory Detailed Information',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Useful info',
            fields: [{
                    name: 'Description',
                    value: "The industrial estate and facilities of chemical factory #16 were rented out illegally to the TerraGroup company.\n\nDuring the Contract Wars, this factory was a hotbed for numerous firefights between USEC and BEAR operatives that determined control over the entire Tarkov industrial district.\n\nWith time, the factory premises were converted into a shelter for local civilians, Scavs, along with the occasional USEC or BEAR operators."
                },
                {
                    name: 'Features',
                    value: "A small, fast-paced CQC map inside of a multi-story industrial factory, complete with tunnels and overhead walkways."
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