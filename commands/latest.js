const config = require("./config.json")

module.exports = {
    name: 'latest',
    cooldown: 30,
    aliases: ['latestupdate'],
    description: 'A command for keeping up with the development of Scav Homie.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: '0.1.2 Fixes/Additions',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: "For 0.12.8",
            fields: [{
                    name: '**0.1.2**',
                    value: "```Added new caliber 23x75mm that also came with the KS-23M that also has a command made after it but for now not much detail since there really is nothing you can do with the KS-23M.\nThe Kel-Tec RFB was also added to the game and has its own command as well.\n\nChanged and updated stats and prices on ammuntion as 7.62x25mm had their stats buffed and many bullets have had their price changed in the last weeks and also added to crafting or added (back) to traders as the 5.45 BS round.```",
                },
                {
                    name: '**Appreciation letter**',
                    value: "Again thanks to everyone that have been using my bot and especially to those who have given feedback and showed their support.\n\nI am happy to see so many people using my bot and also happy to see some of you jump in my discord.\n\nThe bot has been added to 300 servers as of 23/10-20!\nPlease share the bot with people who you think might find it useful and encourage admins to add it if you are on a bigger server :)\n\n**To 400 servers we go.**",
                },

            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};