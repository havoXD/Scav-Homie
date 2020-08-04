const config = require("./config.json")

module.exports = {
    name: 'factory',
    cooldown: 30,
    aliases: ['factorymaps'],
    description: 'A overview of factory commands.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Factory map command.',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Command for the detailed map',
            image: {
                url: "https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/6/6c/Fac4.png/1123px-Fac4.png"
            },
            fields: [{
                name: 'Type "%factoryinfo" to get detailed info about the area',
                value: "Detailed map command: **%factorymap**"
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};