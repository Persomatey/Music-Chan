module.exports = 
{
	name: "Hunter",
	description: "To describe Hunter",
	usage: "[command]",
	aliases: ["hunter", "tellmeabouthunter"], 

	execute(message, args) 
	{
		let mes = 
		"Hunter is a really cool guy!" + "\n" +
		"He has a good portfolio which can be viewed at https://huntergoodin.com/" + "\n" + 
		"Did you know that he is the best programmer ever to have lived? It's true! After all, he made me, " + botName + ", the greatest and most advanced Discord bot ever coded!" + "\n"; 

		return message.channel.send(mes); 
	}
}
