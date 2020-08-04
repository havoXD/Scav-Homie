const config = require("./config.json")

module.exports = {
    name: 'pm',
    cooldown: 30,
    aliases: ['bpm', 'brpm', 'bepm', 'pb', 'bpb', 'brpb', 'bepb', 'apb', 'bapb', 'brapb', 'beapb', 'aps', 'baps', 'braps', 'beaps'],
    description: 'Builds for PM, PM(t), PB, APB and APS.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'Builds for **PM, PM(t), PB, APB and APS**',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Type **%918** for info about ammo',
            fields: [{
                    name: '**Build**',
                    value: (config.topTable + config.pmt + config.alpha9 + config.space + config.ap + config.apbstock + config.apbsup + config.endTable)
                },
                {
                    name: 'Notes',
                    value: "```Standard PM is not modifiable and PB only has it's default suppressor.\nPM(t) is able to have suppressors and Alpha 9 is recommended because it offers a rail used by mounts to put sights on. All suppressors block the iron sights which is why Alpha 9 is the best option.```",
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};