const config = require("../config.json")

module.exports = {
    name: 'b45',
    cooldown: 30,
    aliases: ['b45acp'],
    description: 'Relevant 45 ACP ammunition',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: '**Tier list of 45 ACP ammo**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%45** for detailed stats.',
            fields: [{
                name: 'Easy to understand sheet',
                value: (config.b45acp),
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};