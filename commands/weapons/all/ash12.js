const config = require("../../config.json")

module.exports = {
    name: 'ash12',
    cooldown: 30,
    aliases: ['bash12', 'b ash-12', 'bash12', 'bash', 'b ash12', 'b ash', 'beash-12', 'beash12', 'be ash-12', 'beash', 'be ash12', 'be ash', 'brash-12', 'brash12', 'br ash-12', 'br ash12', 'br ash', 'brash', 'brash'],
    description: 'Builds for ASh-12.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: '**ASh-12** Builds',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%127** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/Hnj7SBT9/brash12.png',
            },
            fields: [{
                    name: 'BR Stats',
                    value: "**Ergo: 52\nVertical Recoil: 128\nHoriz Recoil: 380**",
                    inline: true,
                },
                {
                    name: 'BE Stats',
                    value: "**Ergo: 70\nVertical Recoil: 135\nHoriz Recoil: 401**",
                    inline: true,
                },
                {
                    name: 'B Stats',
                    value: "**Ergo: 58\nVertical Recoil: 131\nHoriz Recoil: 391**",
                    inline: true,
                },
                {
                    name: 'Notes',
                    value: "```Best ergo build uses Fortis Shift grip instead of RK-2\nand only MBUS Iron sights.```\n```Budget build uses RK-0 instead of RK-2```",
                },
                {
                    name: 'Mod List',
                    value: (config.topTable + config.ash12m + config.rk2 + config.ekp18 + config.shade + config.notedSpace + config.fortisg + config.rk0 + config.mbus + config.endTable) + '\n**Best Recoil ASh-12 ↓↓↓**',
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};