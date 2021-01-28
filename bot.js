require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const fs = require('fs');
const { prefix } = require('./config.json');

client.login(process.env.BOT_TOKEN);

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const wpnallFiles = fs.readdirSync('./commands/weapons/all').filter(file => file.endsWith('.js'));
const wpnbFiles = fs.readdirSync('./commands/weapons/b').filter(file => file.endsWith('.js'));
const wpnbaFiles = fs.readdirSync('./commands/weapons/ba').filter(file => file.endsWith('.js'));
const wpnbeFiles = fs.readdirSync('./commands/weapons/be').filter(file => file.endsWith('.js'));
const wpnbrFiles = fs.readdirSync('./commands/weapons/br').filter(file => file.endsWith('.js'));

const ammoFiles = fs.readdirSync('./commands/ammo').filter(file => file.endsWith('.js'));

const mapFiles = fs.readdirSync('./commands/maps').filter(file => file.endsWith('.js'));
const cFiles = fs.readdirSync('./commands/maps/customs').filter(file => file.endsWith('.js'));
const fFiles = fs.readdirSync('./commands/maps/factory').filter(file => file.endsWith('.js'));
const icFiles = fs.readdirSync('./commands/maps/interchange').filter(file => file.endsWith('.js'));
const lFiles = fs.readdirSync('./commands/maps/labs').filter(file => file.endsWith('.js'));
const rFiles = fs.readdirSync('./commands/maps/reserve').filter(file => file.endsWith('.js'));
const slFiles = fs.readdirSync('./commands/maps/shoreline').filter(file => file.endsWith('.js'));
const wFiles = fs.readdirSync('./commands/maps/woods').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

for (const file of wpnallFiles) {
    const command = require(`./commands/weapons/all/${file}`);
    client.commands.set(command.name, command);
}
for (const file of wpnbFiles) {
    const command = require(`./commands/weapons/b/${file}`);
    client.commands.set(command.name, command);
}
for (const file of wpnbaFiles) {
    const command = require(`./commands/weapons/ba/${file}`);
    client.commands.set(command.name, command);
}
for (const file of wpnbeFiles) {
    const command = require(`./commands/weapons/be/${file}`);
    client.commands.set(command.name, command);
}
for (const file of wpnbrFiles) {
    const command = require(`./commands/weapons/br/${file}`);
    client.commands.set(command.name, command);
}


for (const file of ammoFiles) {
    const command = require(`./commands/ammo/${file}`);
    client.commands.set(command.name, command);
}


for (const file of mapFiles) {
    const command = require(`./commands/maps/${file}`);
    client.commands.set(command.name, command);
}
for (const file of cFiles) {
    const command = require(`./commands/maps/customs/${file}`);
    client.commands.set(command.name, command);
}
for (const file of fFiles) {
    const command = require(`./commands/maps/factory/${file}`);
    client.commands.set(command.name, command);
}
for (const file of icFiles) {
    const command = require(`./commands/maps/interchange/${file}`);
    client.commands.set(command.name, command);
}
for (const file of lFiles) {
    const command = require(`./commands/maps/labs/${file}`);
    client.commands.set(command.name, command);
}
for (const file of rFiles) {
    const command = require(`./commands/maps/reserve/${file}`);
    client.commands.set(command.name, command);
}
for (const file of slFiles) {
    const command = require(`./commands/maps/shoreline/${file}`);
    client.commands.set(command.name, command);
}
for (const file of wFiles) {
    const command = require(`./commands/maps/woods/${file}`);
    client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();

client.on("ready", () => {
    console.log('Ready!' + client.guilds.cache.size);
    client.user.setActivity((prefix) + 'help V0.1.2')
});

client.on('message', async(message) => {
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

client.login(process.env.TEST_BOT_TOKEN);