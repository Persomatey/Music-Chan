const fs = require('fs'); 
const Discord = require('discord.js'); 
const Config = require('./config.json'); 
const BotLib = require('./bot.js'); 
const Commands = require('./commandDispatch'); 
global.client = new Discord.Client(); 
client.botConfig = Config; 
client.botConfig.rootDir = __dirname; 
BotLib.loadHandlers(client, 'commands');
const cooldowns = new Discord.Collection(); 
const ytdl = require("ytdl-core"); 
global.botName = ""; 
const keep_alive = require('./keep_alive.js')
global.senpaiRole; 

client.on('ready', () => 
{
	botName = client.user.username; 
	let channel = client.channels.cache.get(client.botConfig.channel);
	connection = channel.join()
	.then(connection => connection.play( ytdl(client.botConfig.link, { quality: 'highestaudio' }) ))
	.catch(console.error);

	if(channel.guild.roles.cache.find(x => x.name === "Senpai"))
	{
		senpaiRole = "" + channel.guild.roles.cache.find(x => x.name === "Senpai").id;
	}
	else
	{
		channel.guild.roles.create(
		{
			data:
			{
				name:"Senpai",
				color:"#e91e63",
			}
		}) 

		setTimeout(function()
		{ 
			senpaiRole = "" + channel.guild.roles.cache.find(x => x.name === "Senpai").id;
		}, 1000);
	}

	var checkminutes = 1, checkthe_interval = checkminutes * 60 * 1000; 
	setInterval(function() 
	{
		connection => connection.play( ytdl(client.botConfig.link, { quality: 'highestaudio' }) );  
	}, checkthe_interval);

	client.user.setActivity(
	{
		name: 'music',
		type: 2
	});

    console.log('Bot Online');
});

client.on('message', message => 
{
	connection => connection.play( ytdl(client.botConfig.link, { quality: 'highestaudio' }) ); 
	
    if(Commands.handle(client, message, cooldowns)) 
	{
        return; 
    }
});

client.login(client.botConfig.token)