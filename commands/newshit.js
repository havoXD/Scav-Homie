const config = require("./config.json")

module.exports = {
    name: 'newshit',
    cooldown: 30,
    aliases: ['new'],
    description: 'A command that shows what the version 0.1.0 changed on scav homie.',
    guildOnly: true,
    execute(message, args) {
        const Embed = {
            color: 0x0099ff,
            title: '0.1.0 new stuff',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: "Crazy",
            fields: [{
                    name: '**The new version**',
                    value: "Prefix is still **%**\n\n**Weapon commands**\nScav homie will respond with a build for every single gun in the game.\n\n**QoL**\nIt will be easier to trigger commands now that each command has aliases and if something still doesn't work let me know and I'll add a alias so that next time it triggers the command.\n\n**Ammo commands**\nThere are now two types of ammo commands, `%545` and `%b545`\n\n`%545` will show a whole table of stats for all ammo for that caliber and specific ways of obtaining some of the ammo.\n\n`%b545` is similar to how it was on the old version it will show best/best pen/best dmg/budget.\n\n**Map commands**\nMap commands have been improved by a added '%mapnameinfo' command and multiple different types of maps for each area and also a note about when the maps were last updated/made.",
                },
                {
                    name: '**More work that has been done and delayed commands**',
                    value: "Every single gun part and all the ammo stats that have been used for this bot have been documented and saved in a file that is going to make it easier for me to make changes to the builds and ammo stats.\n\nArmor and helmet commands were planned to be in this version but I am going on vacation soon and I wanted to put out the bot before I go away.\n\nI will try and work on my bot while I'm away and hopefully be able to add armors at least and maybe helmets.",
                },
                {
                    name: '**Appreciation letter**',
                    value: "Thanks to everyone that have been using my bot and especially to those who have given feedback and showed their support.\nI have been excited to finally release this new makeover of\nScav Homie and this is just the beginning.\nIf anyone would like to help with this project please reach out and may scav homie become the greatest EFT discord bot.\n\nMaker of Scav Homie havoX#7808",
                },

            ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        message.channel.send({ embed: Embed });
    },
};