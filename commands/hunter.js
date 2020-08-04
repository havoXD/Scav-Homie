const config = require("./config.json")

module.exports = {
    name: 'veprhunter',
    cooldown: 30,
    aliases: ['vpo101', 'vpo-101', 'hunter', 'bvpo101', 'bvpo-101', 'bhunter', 'bveprhunter', 'brvpo101', 'brvpo-101', 'brhunter', 'brveprhunter', 'bevpo101', 'bevpo-101', 'behunter', 'beveprhunter'],
    description: 'Build for DVL-10',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Build for **VPO-101**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%n762** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/PfYyd42L/vpohunter.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 38.3\nVertical Recoil: 216\nHoriz Recoil: 351**",
                    inline: true,
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.axion + config.elcan + config.tbl + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};