const config = require("../config.json")

module.exports = {
    name: '127',
    cooldown: 30,
    aliases: ['12.7', '12.7x55', '12.7x55mm', '127x55', '12755', 'sts-130', 'sts130'],
    description: 'Detailed stats of all 12.7x55mm STs-130 ammunition',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: '**All 12.7x55mm Ammunition Table**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%b127** for a budget/best version',
            fields: [{
                name: 'Stats',
                value: (config.all127),
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};