const fs = require('fs'); 
const Discord = require('discord.js'); 
const Config = require('./config.json'); 
const BotLib = require('./bot.js'); 

const Commands = require('./commandDispatch'); 

const client = new Discord.Client(); 
client.botConfig = Config; 
client.botConfig.rootDir = __dirname; 

BotLib.loadHandlers(client, 'commands');

const cooldowns = new Discord.Collection(); 

const channelID = "844075685907922998"; 
const link = "https://youtu.be/5qap5aO4i9A"; 
const ytdl = require("ytdl-core"); 

global.botName = ""; 
global.serverThing; 

client.on('ready', () => 
{
	botName = client.user.username; 
	let channel = client.channels.cache.get(channelID);
	connection = channel.join()
	.then(connection => connection.play( ytdl(link, { quality: 'highestaudio' }) ))
	.catch(console.error);

	serverThing = client.guilds.cache.get("844075685907922994"); 

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