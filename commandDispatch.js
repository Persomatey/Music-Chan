const Discord = require('discord.js');

module.exports = 
{
    handle(client, message, cooldowns) 
	{
        if(!message.content.startsWith(client.botConfig.prefix) || message.author.bot) return;

        const args = message.content.slice(client.botConfig.prefix.length).split(/ +/);
        const commandName = args.shift().toLowerCase();

        const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

        if(!command)
		{
			return;
		}

        if (command.args && !args.length) 
		{
            let reply = 'That command requires more details!';

            if (command.usage) 
			{
                reply += `\nThe proper usage would be: \`${client.botConfig.prefix}${command.name} ${command.usage}\``;
            }

            return message.channel.send(reply);
        }

        try 
		{
            command.execute(message, args).catch((err) => 
			{
                console.error(`Failed running command handler ${command.name}: "${err.message}"`)
            });
        } 
		catch(error) 
		{
            console.error(error);
        }
    }
}