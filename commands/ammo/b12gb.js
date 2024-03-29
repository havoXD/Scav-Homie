const config = require("../config.json")

module.exports = {
    name: 'b12gb',
    cooldown: 30,
    aliases: [],
    description: 'Easy info about 12/70 buckshot ammunition',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: '**Tier list of 12/70 buckshot**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%12gb** for detailed stats.',
            fields: [{
                name: 'Easy to understand sheet',
                value: (config.b12gb),
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};