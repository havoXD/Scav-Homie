const config = require("./config.json")

module.exports = {
    name: 'brpp19',
    cooldown: 30,
    aliases: ['brpp1901', 'br1901', 'brpp-19-01', 'brvityaz', 'brvityazsn', 'brvityaz-sn', 'brpp', 'brpp01', 'brpp-01', 'brpp-19-01 vityaz-sn', 'br19-01vityaz', 'br1901vityaz', 'br1901vityaz-sn', 'brsaiga9', 'brsaiga-9'],
    description: 'Best Recoil build for PP-19-01.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best Recoil **PP-19** and **Saiga-9**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%919** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/TwZwwGbz/brpp19.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 47\n(58 with noted parts)\nVertical Recoil: 34\nHorizontal Recoil: 140**",
                    inline: true,
                },
                {
                    name: 'Notes',
                    value: "```RK-3, AK74 PT Lock + PT-3 and RP-1\ngive a +11 ergo boost.```",
                },
                {
                    name: 'Mod List',
                    value: (config.topTable + config.gp25 + config.osprey + config.moeakm + config.mlok4 + config.rk2 + config.vityazdc + config.ekp18 + config.shade + config.notedSpace + config.rk3 + config.ak74pt + config.pt3 + config.rp1 + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};