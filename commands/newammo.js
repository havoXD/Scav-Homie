const config = require('./config.json');

module.exports = {
	name: 'newammo',
	description: 'Information about the arguments provided.',
    args: true,
    usage: '+ "caliber" Example: %newammo .300',
	execute(message, args) {

        if (args[0] === '.300' ) {
			var x = (".300 Blackout\n" + "Basic Stats\n" + config.all300b1 + "Detailed Stats\n" + config.all300b2);
		}
        const Embed = {
            color: 0x0099ff,
            title: 'Ammunition Commands',
            author: {
                name: config.author,
                url: config.invitelink
            },
            description: 'Commands for each and every caliber',
            fields: [{
                name: '**Commands**',
                value: x
            }, ],
            footer: {
                text: (config.gameUpdate),
            },
        };

        

		message.channel.send({ embed: Embed });
	},
};