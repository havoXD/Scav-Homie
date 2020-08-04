const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const fs = require('fs');
const { prefix, token } = require('./config.json');

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const weaponCmds = fs.readdirSync('./commands/weaponcmds').filter(file => file.endsWith('.js'));
const BestECommand = fs.readdirSync('./commands/weaponcmds/bewpncmds').filter(file => file.endsWith('.js'))
const BestRCommand = fs.readdirSync('./commands/weaponcmds/brwpncmds').filter(file => file.endsWith('.js'))
const BestBCommand = fs.readdirSync('./commands/weaponcmds/bwpncmds').filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

for (const file of weaponCmds) {
    const wpncommand = require(`./commands/weaponcmds/${file}`);
    client.commands.set(wpncommand.name, wpncommand);
}

for (const file of BestECommand) {
    const bewpnCmds = require(`./commands/weaponcmds/bewpncmds/${file}`);
    client.commands.set(bewpnCmds.name, bewpnCmds);
}
for (const file of BestRCommand) {
    const brwpnCmds = require(`./commands/weaponcmds/brwpncmds/${file}`);
    client.commands.set(brwpnCmds.name, brwpnCmds);
}
for (const file of BestBCommand) {
    const bwpnCmds = require(`./commands/weaponcmds/bwpncmds/${file}`);
    client.commands.set(bwpnCmds.name, bwpnCmds);
}


const cooldowns = new Discord.Collection();

client.on("ready", () => {
    console.log('Ready!' + client.guilds.cache.size);
    client.user.setActivity((prefix) + 'help')
});

function getCategory(name) {
    request('https://api.tarkov.dev/query/' + name + '?filter=category'), { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        return body;
    }
}


client.on('message', message => {
    if (!message.content.includes(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName) ||
        client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    if (command.guildOnly && message.channel.type !== 'text') {
        return message.reply('I can\'t execute that command inside DMs!');
    }

    if (command.args && !args.length) {
        let reply = `You didn't provide any arguments, ${message.author}!`;

        if (command.usage) {
            reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
        }

        return message.channel.send(reply);
    }

    if (message.content.startsWith(prefix + 'eval') && message.author.id === '249267881328508930') {
        output = eval(message.content.split(prefix + 'eval')[1])
        message.reply(output);
    }

    if (!cooldowns.has(command.name + command.aliases)) {
        cooldowns.set(command.name + command.aliases, new Discord.Collection());
    }

    const now = Date.now();
    const timestamps = cooldowns.get(command.name + command.aliases);
    const cooldownAmount = (command.cooldown || 3) * 1000;

    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.reply(`please wait ${timeLeft.toFixed(0)} more second(s) before reusing the \`${command.name}\` command.`);
        }
    }

    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});

client.login(token);