const config = require("../../config.json")

module.exports = {
    name: 'bsa58',
    cooldown: 30,
    aliases: ['bfal', 'bdsarms', 'bsa-58', 'bdsarmssa-58', 'b sa-58', 'b dsarmssa-58', 'b ds arms sa-58', 'budgetsa58', 'budgetsa-58'],
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
                url: 'https://i.postimg.cc/tR2R7KPn/bsa58.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 57\nVertical Recoil: 178\nHorizontal Recoil: 306**",
                    inline: true,
                },
                {
                    name: 'Base',
                    value: "[This build is based on the stock preset of the SA-58](https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/a/ae/DS_Arms_SA-58_OSW_Para_7.62x51.png?version=4f3c03e9210afdd356bccc669aa42b27)"
                },
                {
                    name: 'Second command',
                    value: "Type **%b2sa58** for a budget build based on a different varaint.",
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.faltube + config.cst + config.moe + config.magpul + config.tapcofal + config.dsquad + config.tbl + config.rk0 + config.fal11 + config.comp2a + config.extreme + config.xps30 + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};