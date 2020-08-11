const config = require("./config.json")
module.exports = {
    name: 'weaponcmd',
    cooldown: 30,
    aliases: ['wpncmd'],
    description: 'overview of weapon commands',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: 'How to use the build commands',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Explanation',
            fields: [{
                    name: 'For every single gun in the game',
                    value: "Scav Homie has commands for every single gun as of 0.12.7 (except the GL).\n\n**B**\n`Budget` and/or just `Build`.\nSince some weapons are not very modifiable Scav Homie will show the same build no matter if you type br/be or b.\n**Examples**\n`%bak74, %bm4, %bdtmdr, %bm1911, %bdvl10.`\n\n**BR**\n`Best Recoil` builds are available for most guns.\n**Examples**\n`%brak74, %brm4, %brdtmdr, %brsr25, %brrpk.`\n\n**BE**\n`Best Ergo` builds are as available as 'BR' commands.\n**Examples**\n`%beak74, %bem4, %bedtmdr, %besr25, %berpk.`\n\n**BA**\n`Best Accuracy` builds are new and exist for shotguns and sniper rifles.\n**Examples**\n`%bam700, %bam590, %bam870, %badvl10, %basaiga12.`",
                },
                {
                    name: 'Special commands',
                    value: "Some commands will have a lot of **notes** and/or a long **Mod List**.\nAn example is the AK builds where the top part of the command will have notes that explain differences for each AK series gun that is built different than the one in the image.\n\nThe **Mod List** will also have a section called **Noted Parts** where all the parts that have been noted will be listed.",
                },
            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};