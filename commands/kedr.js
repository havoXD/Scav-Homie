const config = require("./config.json")

module.exports = {
    name: 'kedr',
    cooldown: 30,
    aliases: [, 'bkedr', 'brkedr', 'bekedr', 'pp-9', 'pp-91', 'pp-91-01', 'pp9', 'pp91', 'pp9101', 'pp-9klin', 'pp-91kedr', 'pp-91-01kedr-b', 'pp9klin', 'pp91kedr', 'pp9101kedr-b', 'kedr-b', 'klin', 'pp9101kedrb', 'bpp-9', 'bpp-91', 'bpp-91-01', 'bpp9', 'bpp91', 'bpp9101', 'bpp-9klin', 'bpp-91kedr', 'bpp-91-01kedr-b', 'bpp9klin', 'bpp91kedr', 'bpp9101kedr-b', 'bkedr-b', 'bklin', 'bpp9101kedrb', 'brpp-9', 'brpp-91', 'brpp-91-01', 'brpp9', 'brpp91', 'brpp9101', 'brpp-9klin', 'brpp-91kedr', 'brpp-91-01kedr-b', 'brpp9klin', 'brpp91kedr', 'brpp9101kedr-b', 'brkedr-b', 'brklin', 'brpp9101kedrb', 'bepp-9', 'bepp-91', 'bepp-91-01', 'bepp9', 'bepp91', 'bepp9101', 'bepp-9klin', 'bepp-91kedr', 'bepp-91-01kedr-b', 'bepp9klin', 'bepp91kedr', 'bepp9101kedr-b', 'bekedr-b', 'beklin', 'bepp9101kedrb', ],
    description: 'Build for PP-9/91/91-01 aka Klin/Kedr/Kedr-B',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Build for **Klin/Kedr/Kedr-B**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%918** for info about ammo',
            fields: [{
                name: '**Build**',
                value: 'These three guns can not be modded more than a suppressor for the **Kedr-B** and a **compact collimator mount + flashlight mount** on the **Klin** and **Kedr**.\n' + (config.topTable + config.kedrklin + config.kedrris + config.space + config.kedrb + config.kedradpt + config.kedrsup + config.endTable)
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};