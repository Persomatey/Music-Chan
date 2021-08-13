module.exports = 
{
	name: "Senpai",
	description: "To make yourself LoFi Hip Bot's senpai",
	usage: "[command]",
	aliases: ["callmesenpai", "becomesenpai", "makemesenpai", "makemeasenpai", "makemeyoursenpai", "iwanttobesenpai", "iwanttobeyoursenpai", "iwanttobeasenpai"], 
	
	execute(message, args) 
	{
		let member = message.member;
		let name = "TEMP"; 

		if(!member.nickname)
		{
			name = member.user.username; 
		}
		else
		{
			name = member.nickname; 
		}

		if ( message.member.roles.cache.some(role => role.name === "Senpai") )
		{
			return message.channel.send("Oh, silly " + name + ". You're already my senpai!");
		}
		else
		{
			member.roles.add(senpaiRole);
			return message.channel.send("Okay, " + name + ", you are now my senpai!");
		}
	}
}