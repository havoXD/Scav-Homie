const config = require("./config.json")

module.exports = {
    name: 'b366',
    cooldown: 30,
    aliases: [],
    description: 'Relevant .366 TKM ammunition',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: '**Tier list of .366 TKM ammo**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%366** for detailed stats.',
            fields: [{
                name: 'Easy to understand sheet',
                value: (config.b366),
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};