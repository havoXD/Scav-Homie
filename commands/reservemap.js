const config = require("./config.json")

module.exports = {
    name: 'reservemap',
    cooldown: 30,
    aliases: ['rmap'],
    description: 'A map of Reserve.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Reserve Map',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Useful for callouts',
            image: {
                url: "https://cdn.discordapp.com/attachments/667018460018114620/674353784809324568/ReserveCallouts-01.png"
            },
            fields: [{
                name: 'Type "%reserveinfo" to get detailed info about the area',
                value: "Map for **0.12**\nMap is still valid."
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};