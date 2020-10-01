const config = require("../../config.json")

module.exports = {
    name: '57',
    cooldown: 30,
    aliases: ['fiveseven', 'fnfiveseven', 'fn57', 'fn5-7'],
    description: 'Prompt for ammo or build',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Gun build or Ammo?',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'This is here for less confusion',
            fields: [{
                name: 'What did you want?',
                value: "**Type** `a57` **for ammo**\n**Type** `b57` **for gun build**",
                inline: true,
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};