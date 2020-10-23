const config = require("./config.json");

module.exports = {
    name: 'donate',
    cooldown: 30,
    aliases: [],
    description: 'If you want to donate',
    guildOnly: true,

    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: "**Donating**",
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: '**All donations are very much appreciated**',
            image: {
                url: 'https://i.postimg.cc/rmQ8LvTc/QR-kod.png',
            },
            fields: [{
                    name: 'How to donate',
                    value: "[You can scan the QR-code or click this text.](https://www.paypal.com/donate?hosted_button_id=HXKZPLF8FEYUN)\n\nI am very thankful for the **300+ servers** that have added this bot and I hope to continue this project for a while.\n\nI hope I am making it easier for people to gather info about the complex game called **Escape From Tarkov** and I hope to improve the help I am providing with\n__your support and suggestions__.\n\n**Don't forget to join my server** if you have any suggestions or if you need any help.\n\n**Click the text at the top of any message sent by Scav Homie and you'll be sent to his hideout (Discord Server) :)**\n\nhavoX#7808 - Developer of Scav Homie",
                    inline: true,
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};