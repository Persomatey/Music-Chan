module.exports = 
{
	name: "Flirt",
	description: "To flirt with the bot",
	usage: "[command]",
	aliases: ["flirt", "flirting"], 

	execute(message, args) 
	{
		let mes = ""; 

		let rand = Math.floor(Math.random() * 7); // random number between 0 and 6 

		let name = ""; 

		if(!message.member.nickname)
		{
			name = message.member.user.username; 
		}
		else
		{
			name = message.member.nickname; 
		}

		switch(rand) 
		{
			case 0:
				mes = "-blushes-"; 
				break;
			case 1:
				mes = "Oh, my! "; 
				break;
			case 2:
				mes = "I appreciate you saying that. "; 
				break;
			case 3:
				mes = "Aww, you're so sweet, " + name + "."; 
				break;
			case 4:
				mes = "I'm sorry, " + name +". I just don't see you that way. "; 
				break;
			case 5:
				mes = "Oh, " + name + ". This is why we're such good friends. "; 
				break;
			case 6:
				mes = "Oh, you. You're like a sibling to me. "; 
				break;
			default:
		}

		return message.channel.send(mes); 
	}
}