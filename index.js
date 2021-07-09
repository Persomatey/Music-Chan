const fs = require('fs'); 
const Discord = require('discord.js'); 
const Config = require('./config.json'); 
const BotLib = require('./bot.js'); 
const Commands = require('./commandDispatch'); 
const { keep_alive } = require("./keep_alive");

const client = new Discord.Client(); 
client.botConfig = Config; 
client.botConfig.rootDir = __dirname; 

BotLib.loadHandlers(client, 'commands');

const cooldowns = new Discord.Collection(); 

const ytdl = require("ytdl-core"); 

global.botName = ""; 

client.on('ready', () => 
{
	botName = client.user.username; 
	let channel = client.channels.cache.get(client.botConfig.channel);
	connection = channel.join()
	.then(connection => connection.play( ytdl(client.botConfig.link, { quality: 'highestaudio' }) ))
	.catch(console.error);

    console.log('Bot Online');
});

client.on('message', message => 
{
    if(Commands.handle(client, message, cooldowns)) 
	{
        return; 
    }
});

client.login(client.botConfig.token)