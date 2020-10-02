const config = require("../config.json")

module.exports = {
    name: '918',
    cooldown: 30,
    aliases: ['9x18', 'all918'],
    description: 'Detailed stats of all 9x18 ammunition',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: '**All 9x18 Ammunition Table**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%b919** for a budget/best version',
            fields: [{
                    name: 'Notes',
                    value: "```9x18 PMM:\nCan't be shot from the Kedr and Kedr-B.```",
                },
                {
                    name: 'Basic Stats',
                    value: (config.all9181),
                },
                {
                    name: '‏‏‎ ‎',
                    value: (config.all9182),
                },
                {
                    name: 'Detailed Stats',
                    value: (config.all9183),
                },
                {
                    name: '‏‏‎ ‎',
                    value: (config.all9184),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};