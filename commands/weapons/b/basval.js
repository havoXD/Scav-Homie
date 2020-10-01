const config = require("../../config.json")

module.exports = {
    name: 'basval',
    cooldown: 30,
    aliases: ['bvss', 'bas val', 'b asval', 'b as val', 'bvssvintorez'],
    description: 'Budget build for AS VAL/VSS',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Budget **AS VAL/VSS**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%939** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/T1PV8FFL/basval.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 45\nVertical Recoil: 58\nHorizontal Recoil: 84**",
                    inline: true,
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.ekp8 + config.shade + config.TOZ6p29m + config.rk0 + config.x400 + config.rp1 + config.endTable) + '\n**Budget AS VAL ↓↓↓**',
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};