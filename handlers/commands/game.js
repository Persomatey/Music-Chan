module.exports = 
{
	name: "game",
	description: "To randomly select a game for you to play. ",
	usage: "[command]",
	aliases: ["game", "playagame", "whatgame", "playagame", "randomgame"], 

	execute(message, args) 
	{
		let mes = ""; 

		let rand = Math.floor(Math.random() * 7); // random number between 0 and 2

		switch(rand) 
		{
			case 0:
				mes = "Why not try Key Finder?" + "\n" + 
				"It is a game created by Hunter Goodin in the Unreal 4 game engine." + "\n" + 
				"A 2D Action Platformer where you must fight your way through enemies to obtain the keys to beat the level." + "\n" + 
				"https://persomatey.itch.io/key-finder"; 
				break;
			case 1:
				mes = "Why not try Helation?" + "\n" + 
				"It is a game created by Hunter Goodin in the Unreal 4 game engine." + "\n" + 
				"An Arena FPS game inspired by classic games in the genre such as Halo, Portal, and Doom. A tutorial mode where you make your way through the training facility while learning the ropes of the game. An arena mode where you fight your way through troves of enemies to try to beat your high score." + "\n" + 
				"https://persomatey.itch.io/helation"; 
				break;
			case 2:
				mes = "Why not try Rewound Running Remix?" + "\n" + 
				"It is a game created by Hunter Goodin, Gerardo Bonnet, and Peter Kallon in the Unity game engine." + "\n" + 
				"This game is a platforming auto-runner... in reverse!? The player must press the 'jump' button as the player would normally be jumping as the whole level rewinds to the very beginning in this rhythm game disguised as a 2D platformer." + "\n" + 
				"https://persomatey.itch.io/rewound-running-remix"; 
				break;
			case 3:
				mes = "Why not try Legend of Fantasy?" + "\n" + 
				"It is a game created by the COC Computer Science Club in the Unity game engine." + "\n" + 
				"A top-down Zelda-like game with a fantasy theme. Fight your way through droves of villainous monsters such as orcs and mushrooms to make your way to the end to defeat the scourge of the Fantaswhere Forest, Orcutoryx." + "\n" + 
				"https://coc-computerscienceclub.itch.io/legend-of-fantasy"; 
				break;
			case 4:
				mes = "Why not try Space Shooter 9000?" + "\n" + 
				"It is a game created by the COC Computer Science Club in the Unity game engine." + "\n" + 
				"A side-scrolling space shooter arcade game with a low poly aesthetic. Battle through wave after wave of enemy ships as you plunge deep into enemy territory." + "\n" + 
				"https://coc-computerscienceclub.itch.io/space-shooter-9000"; 
				break;
			case 5:
				mes = "Why not try Factory?" + "\n" + 
				"It is a game created by the COC Computer Science Club in the Unity game engine." + "\n" + 
				"A top-down shooter with a military theme. Grind your way through hoards of zombies and droves of drones as you fight your way to the large boss drone at the end of the level to recapture the factory!" + "\n" + 
				"https://coc-computerscienceclub.itch.io/factory"; 
				break;
			case 6:
				mes = "Why not try Funem?" + "\n" + 
				"It is a game created by Hunter Goodin in the Unity game engine for the GMTK 2021 Game Jam which had the theme 'Joined Together' " + "\n" + 
				"A top-down Zelda-like where you play as two characters tied together by a rope. It is best played with a friend!" + "\n" + 
				"https://persomatey.itch.io/funem"; 
				break;
			default:
		}

		return message.channel.send(mes); 
	}
}