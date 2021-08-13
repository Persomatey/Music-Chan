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

		if(!message.guild.roles.cache.find(x => x.name === "Senpai"))
		{
			return message.channel.send("Oh no! It looks like somebody deleted the Senpai role! Now my senpai will never notice me Q~Q");
		}

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
			var myRole = "" + senpaiRole; 
			console.log("senpaiRole ID: " + senpaiRole); 
			console.log("myRole ID: " + myRole); 
			//message.member.roles.add("875786349012209724");
			member.roles.add(senpaiRole);
			return message.channel.send("Okay, " + name + ", you are now my senpai!");
		}
	}
}