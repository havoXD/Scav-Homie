const config = require("../../config.json")

module.exports = {
    name: 'p90',
    cooldown: 30,
    aliases: ['bp90', 'b p90', 'bfnp90', 'bfn p90', 'b fn p90', 'bfn-p90', 'bep90', 'be p90', 'befnp90', 'befn p90', 'be fn p90', 'befn-p90', 'brp90', 'brASh12', 'brfnp90', 'brfn p90', 'br fn p90', 'brfn-p90'],
    description: 'Builds for FN P90.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: '**P90** Builds',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%57** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/5t4wXjgh/brp90.png',
            },
            fields: [{
                    name: 'BR Stats',
                    value: "**Ergo: 63\nVertical Recoil: 42\nHoriz Recoil: 210**",
                    inline: true,
                },
                {
                    name: 'BE Stats',
                    value: "**Ergo: 81\nVertical Recoil: 46\nHoriz Recoil: 231**",
                    inline: true,
                },
                {
                    name: 'B Stats',
                    value: "**Ergo: 72\nVertical Recoil: 45\nHoriz Recoil: 225**",
                    inline: true,
                },
                {
                    name: 'Notes',
                    value: "```Best ergo build uses FN EFFEN receiver instead of the default receiver, K&M charging handle,\nno suppressor and no extra sight.```\n```Budget build is based on a default P90 with a Damage butt pad, side rail with a x400\nand XPS3-0 is recommended on the top rail```",
                },
                {
                    name: 'Mod List',
                    value: (config.topTable + config.p90dmg + config.p90fh + config.p90sup + config.p90top + config.ekp18 + config.shade + config.notedSpace + config.p90r + config.knm + config.x400 + config.xps30 + config.endTable) + '\n**Best Recoil P90 ↓↓↓**',
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};