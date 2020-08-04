const config = require("./config.json")

module.exports = {
    name: '919',
    cooldown: 30,
    aliases: ['9x19', 'all919'],
    description: 'Detailed stats of all 9x19 ammunition',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: '**All 9x19 Ammunition Table**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%b919** for a budget/best version',
            fields: [{
                    name: 'Notes',
                    value: "```9x19 RIP:\nonly available as barter at both traders but at Skier only after completion of the quest 'Setup'.\n\nSkier Barter: 2x Chainlets -> 20x RIP\nJaeger Barter: 1x Aquamari -> 20x RIP```",
                },
                {
                    name: 'Basic Stats',
                    value: (config.all9191),
                },
                {
                    name: 'Detailed Stats',
                    value: (config.all9192),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};