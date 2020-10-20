const config = require("./config.json")

module.exports = {
    name: 'adaraccu',
    cooldown: 30,
    aliases: [],
    description: 'Shows accuracy of the ADAR 2-15',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Accuracy of ADAR 2-15',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'test command',
            image: {
                url: 'https://i.imgur.com/TgkwYc9.png',
            },
            fields: [
                {
                    name: 'Statistics',
                    value: '```╔══════╦════════╦═══════════════╦════════════════╗\n║ Gun  ║ MOA(R) ║ MIL (CM/100m) ║ MOA(D) 1"/100m ║\n╠══════╬════════╬═══════════════╬════════════════╣\n║ ADAR ║ 2.31   ║ 11.7348       ║ 4.62           ║\n╚══════╩════════╩═══════════════╩════════════════╝```',
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};