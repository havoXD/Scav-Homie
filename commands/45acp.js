const config = require("./config.json")

module.exports = {
    name: '45',
    cooldown: 30,
    aliases: ['.45', '.45 acp', 'acp', '45acp', '.45acp'],
    description: 'Detailed stats of all .45 ACP ammunition',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: '**All .45 ACP Ammunition Table**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%b45** for a budget/best version',
            fields: [{
                name: 'Stats',
                value: (config.all45acp),
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};