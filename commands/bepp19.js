const config = require("./config.json")

module.exports = {
    name: 'bepp19',
    cooldown: 30,
    aliases: ['besaiga-9', 'besaiga9', 'bepp1901', 'be1901', 'bepp-19-01', 'bevityaz', 'bevityazsn', 'bevityaz-sn', 'bepp', 'bepp01', 'bepp-01', 'bepp-19-01 vityaz-sn', 'be19-01vityaz', 'be1901vityaz', 'be1901vityaz-sn', 'besaiga9', 'besaiga-9'],
    description: 'Best Ergo build for PP-19-01 and Saiga-9.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best Ergo **PP-19 & Saiga-9**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%919** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/4yV3HMbm/bepp19.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 91\nVertical Recoil: 48\nHorizontal Recoil: 200**",
                    inline: true,
                },
                {
                    name: 'Mod List',
                    value: (config.topTable + config.akts + config.prsgen3 + config.moeakm + config.mlok4 + config.fortisg + config.rp1 + config.rk3 + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};