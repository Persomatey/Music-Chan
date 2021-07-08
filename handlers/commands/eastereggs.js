module.exports = 
{
	name: "Easter",
	description: "Are there any easter eggs?",
	usage: "[command]",
	aliases: ["eastereggs", "easteregg", "arethereanyeastereggs"], 

	execute(message, args) 
	{
		return message.channel.send('Hmm... Maybe there are some Easter eggs!'); 
	}
}