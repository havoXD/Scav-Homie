const config = require("../config.json")

module.exports = {
    name: 'b4g',
    cooldown: 30,
    aliases: ['b23x75', 'b23x75mm', 'b4gauge'],
    description: 'Easy info about 23x75mm ammunition',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: '**Tier list of 23x75mm**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%23x75** for detailed stats.',
            fields: [{
                name: '**Notes**',
                value: "The two `Shrapnel` rounds both have a value at the end of their name that represents the range their effective at.",
            },
            {
                name: 'Easy to understand sheet',
                value: (config.b4g),
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};