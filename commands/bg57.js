const config = require("./config.json")

module.exports = {
    name: 'b57',
    cooldown: 30,
    aliases: [, 'br57', 'be57', 'fiveseven', '5-7', 'fnfiveseven', 'fn57', 'fn5-7', 'bfiveseven', 'b5-7', 'bfnfiveseven', 'bfn57', 'bfn5-7', 'brfiveseven', 'br5-7', 'brfnfiveseven', 'brfn57', 'brfn5-7', 'befiveseven', 'be5-7', 'befnfiveseven', 'befn57', 'befn5-7'],
    description: 'Build for FN Five-SeveN',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Build for **Five-SeveN**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%57** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/V6DmRCv7/57.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 84\nVertical Recoil: 320\nHorizontal Recoil: 233**",
                    inline: true,
                },
                {
                    name: 'Stats with silencer',
                    value: "**Ergo: 80\nVertical Recoil: 307\nHorizontal Recoil: 223**",
                    inline: true,
                },
                {
                    name: '**Build**',
                    value: (config.topTable + config.fnrmr + config.rmr + config.xc1 + config.barrel57 + config.sfn57 + config.endTable)
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};