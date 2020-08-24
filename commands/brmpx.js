const config = require("./config.json")

module.exports = {
    name: 'brmpx',
    cooldown: 30,
    aliases: ['br mpx', 'brsigmpx', 'br sig mpx', 'brsig mpx', 'br sigmpx', 'brsig-mpx', 'br sig-mpx'],
    description: 'Best Recoil build for MPX.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Best Recoil **MPX**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%919** for info about ammo',
            image: {
                url: 'https://i.postimg.cc/3N3S1Ch9/brmpx.png',
            },
            fields: [{
                    name: 'Stats',
                    value: "**Ergo: 67\nVertical Recoil: 18\nHorizontal Recoil: 97**",
                    inline: true,
                },
                {
                    name: 'Notes',
                    value: "```MBUS Iron Sights, Geissele Charging Handle and\nPSG-1 Pistol Grip are only there to boost ergo.```",
                },
                {
                    name: 'Mod List',
                    value: (config.topTable + config.mw14 + config.mlok4 + config.rk2 + config.mpx14 + config.taccom + config.mpxadpt + config.mesa + config.hke1 + config.psg1 + config.sch + config.mbus + config.endTable),
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};