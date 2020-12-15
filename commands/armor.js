const config = require('./config.json');

module.exports = {
	name: 'armor',
	description: 'Information about the arguments provided.',
    args: true,
    usage: '"armor" + "level"',
	execute(message, args) {
        if (args[0] === '2' ) {
			return message.channel.send(config.class2);
        }
        

		message.channel.send(`First argument: ${args[0]}`);
	},
};