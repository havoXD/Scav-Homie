const config = require("../config.json")

module.exports = {
    name: 'n762',
    cooldown: 30,
    aliases: ['n7.62', '7.62x51','762x51','76251'],
    description: 'Detailed stats of all 7.62x51 ammunition',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: '**All 7.62x51 Ammunition Table**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%bn762** for a budget/best version',
            fields: [{
                    name: 'Notes',
                    value: '**M61:**\nUnlocked at trader after completion of:\n"Wet Job" - Part 6.\n\n**M62:**\nUnlocked at trader after completion of:\n"Spa Tour" - Part 6.',
                },
                {
                    name: 'Basic Stats',
                    value: (config.alln7621),
                },
                {
                    name: '‏‏‎‏‏‎Detailed Stats',
                    value: (config.alln7622),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};