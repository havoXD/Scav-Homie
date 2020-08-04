const config = require("./config.json")

module.exports = {
    name: 'b2sa58',
    cooldown: 30,
    aliases: ['b2fal', 'b2dsarms', 'b2sa-58', 'b2dsarmssa-58', 'b 2sa-58', 'b 2dsarmssa-58', 'b 2 ds arms sa-58', 'budget2sa58', 'budget2sa-58'],
    description: 'Budget build for SA-58',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Budget build **SA-58**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%n762** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/R0GkRHmS/b2sa58.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 38\nVertical Recoil: 115\nHorizontal Recoil: 198**",
                    inline: true,
                },
                {
                    name: 'Base',
                    value: "[This build is based on the stock preset of the SA-58](https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/6/68/SA-58_AUS.png?version=e815cd5803ba9d82bf721137dd0d518c)"
                },
                {
                    name: 'Second command',
                    value: "Type **%bsa58** for a budget build based on a different varaint.",
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.faltube + config.baskak + config.regular + config.aimsport + config.mlok2 + config.tbl + config.mlok4 + config.rk0 + config.fal21 + config.austrian + config.extreme + config.ekp18 + config.shade + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};