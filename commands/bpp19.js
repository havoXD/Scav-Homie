const config = require("./config.json")

module.exports = {
    name: 'bpp19',
    cooldown: 30,
    aliases: ['bpp1901', 'b1901', 'bpp-19-01', 'bvityaz', 'bvityazsn', 'bvityaz-sn', 'bpp', 'bpp01', 'bpp-01', 'bpp-19-01 vityaz-sn', 'b19-01vityaz', 'b1901vityaz', 'b1901vityaz-sn'],
    description: 'Budget build for PP-19-01.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Budget **PP-19**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%919** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/76Chwb51/bpp19.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 54\nVertical Recoil: 39\nHorizontal Recoil: 161**",
                    inline: true,
                },
                {
                    name: 'Mod List',
                    value: (config.topTable + config.gp25 + config.zenit10 + config.rk0 + config.x400 + config.vityazdc + config.ekp18 + config.shade + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};