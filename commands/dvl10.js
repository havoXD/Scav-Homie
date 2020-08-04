const config = require("./config.json")

module.exports = {
    name: 'dvl10',
    cooldown: 30,
    aliases: [, 'bdvl10', 'bdvl-10', 'brdvl10', 'brdvl-10', 'bedvl10', 'bedvl-10', 'badvl10', 'badvl-10'],
    description: 'Build for DVL-10',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Build for **DVL-10**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%r762** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/15PtcQ5j/dvl10.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 41\nVertical Recoil: 64\nHoriz Recoil: 318\nAccuracy: 0.45 MOA**",
                    inline: true,
                },
                {
                    name: '**Mod List**',
                    value: (config.topTable + config.hogue + config.dvl660 + config.dvl10m2 + config.lobaevhg + config.nf30 + config.vudu + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};