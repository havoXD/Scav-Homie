const config = require("./config.json");

module.exports = {
    name: 'github',
    cooldown: 30,
    aliases: [],
    description: 'Github repo link.',
    guildOnly: true,

    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: "**Scav Homie's Repository**",
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Leave suggestions to havoX#7808',
            fields: [{
                name: '**Link**',
                value: "[**Thanks in advance for any help :)**](https://github.com/havoXD/Scav-Homie)",
                inline: true,
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};