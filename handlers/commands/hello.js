module.exports = 
{
	name: "hello",
	description: "To say hi",
	args: false, 
	usage: "",
	aliases: ["hello", "hi", "konichiwa"],

	execute(message, args) 
	{
		let mes = ""; 

		let rand = Math.floor(Math.random() * 21); // random number between 0 and 20

		switch(rand) 
		{
			case 0:
				mes = "Hello!"; 
				break;
			case 1:
				mes = "Hi, there!"; 
				break;
			case 2:
				mes = "Hi!"; 
				break;
			case 3:
				mes = "Konichiwa!"; 
				break;
			case 4:
				mes = "¡Hola!"; 
				break;
			case 5:
				mes = "Hello, World!"; 
				break;
			case 6:
				mes = "Hello! I am LoFi Hip Bot, your server's radio streaming bot!" +"\n" + "I was created by the brilliant Hunter Goodin to share with you some chill beats!"; 
				break;
			case 7:
				mes = "Hello! Did you know that you can connect to the '24/7 Chill Beats' voice channel? You can't talk in it, but you can hear my play some music!"; 
				reak;
			case 8:
				mes = "Hello, there!"; 
				break;
			case 9:
				mes = "Oh! Why... hello!"; 
				break;
			case 10:
				mes = "Hello to you too!"; 
				break;
			case 11:
				mes = "Howdy!"; 
				break;
			case 12:
				mes = "G'day!"; 
				break
			case 13:
				mes = "Good day!"; 
				break;
			case 14:
				mes = "Yo!"; 
				break;
			case 15:
				mes = "Greetings!"; 
				break;
			case 16:
				mes = "Greetings, human!"; 
				break;
			case 17:
				mes = "Hey!"; 
				break;
			case 18:
				mes = "Hey, there!"; 
				break;
			case 19:
				mes = "Greetings and salutations!"; 
				break;
			case 20:
				mes = "Hey! Long time no see!"; 
				break;
			default:
		}

		return message.channel.send(mes);
	},
}