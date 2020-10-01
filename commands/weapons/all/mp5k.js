const config = require("../../config.json")

module.exports = {
    name: 'mp5k',
    cooldown: 30,
    aliases: ['bmp5k', 'b mp5k', 'bhkmp5k', 'b hk mp5k', 'bhk mp5k', 'b hkmp5k', 'bhk-mp5k', 'b hk-mp5k', 'be mp5k', 'behkmp5k', 'be hk mp5k', 'behk mp5k', 'be hkmp5k', 'behk-mp5k', 'be hk-mp5k', 'br mp5k', 'brhkmp5k', 'br hk mp5k', 'brhk mp5k', 'br hkmp5k', 'brhk-mp5k', 'br hk-mp5k', 'brmp5kurz', 'bmp5kurz', 'bemp5kurz'],
    description: 'Build for MP5k.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: '**MP5k** Build',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%919** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/vT7W8R5Y/mp5k.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 70\nVertical Recoil: 71\nHorizontal Recoil: 314**",
                    inline: true,
                },
                {
                    name: 'Mod List',
                    value: (config.topTable + config.mfihk + config.ekp18 + config.shade + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};