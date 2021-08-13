# Music-Chan
 
<i>A Discord bot that plays audio from a specified livestream on runtime</i>

<img src="https://raw.githubusercontent.com/Persomatey/MusicBot/master/LoFiGirl.png?token=AFRVWK7IVN2U7LXLBY5TFYDA6AHK4" data-canonical-src="https://raw.githubusercontent.com/Persomatey/MusicBot/master/LoFiGirl.png?token=AFRVWK7IVN2U7LXLBY5TFYDA6AHK4" width="340" height="400" />

<details>
<summary>Instructions</summary>
<blockquote>

- [Video Instructions](https://youtu.be/4t32sicjFYI)
1. [![Run on Repl.it](https://repl.it/badge/github/Persomatey/MusicBot)](https://repl.it/github/Persomatey/MusicBot) (or IDE of your choice) 
2. Before running the code, enter the following commands into the console: 
	- `npm i ffmpeg-static` to install FFmpeg dependencies 
	- `npm i --save ytdl-core opusscript` to install OpusScript dependencies 
3. In config.json do the following: 
	- Type the character you want to be the prefix of every command in the `prefix`
	- Paste the bot's token into the quotation marks of the `token` variable 
	- Paste the the channel ID of the channel you want into the quotation marks of the `channel` variable 
	- Paste the stream URL of the music you want to listen to into the quotation marks of the `link` variable
4. Run the replit app (or run app in IDE of choice) 
	- (Optional) For 24/7 pinging at 5 minute intervals, check out [UptimeRobot](https://uptimerobot.com/) 
5. Hop in the voice channel and listen to some beats 

</blockquote>
</details>

<details>
<summary>Credits</summary>
<blockquote>
 
- Programmed by [Hunter Goodin](https://huntergoodin.com/) 
- Concept art for ChilledCow's LoFi girl created by [@Timo_wei95](https://twitter.com/Timo_wei95/status/1190556956458532865) on Twitter 

</blockquote>
</details>

<details>
<summary>Miscellaneous</summary>
<blockquote>

- A good online IDE to run this code on is [Replit](https://replit.com/) 
  - Alternatively can also be run via any IDE such as [Visual Studio](https://visualstudio.microsoft.com/downloads/), [VS Code](https://code.visualstudio.com/insiders/), [Atom](https://atom.io/), etc 
- A good 24/7 pinger with 5 minute pings is [UptimeRobot](https://uptimerobot.com/) 

</blockquote>
</details>

<details>
<summary>Change List</summary>
<blockquote>

<details>
<summary>CL-000009</summary>
<blockquote>

- Made the following changes: 
	- Changed the wait time between resets 
		- Was up to 1 hour 
		- Now is up to 1 minute 
	- Made the Senapi functionality a bit more stable in between resets 
		- Now the bot checks if there is a Senpai role in the guild of the given channel 
			- If there isn't, create one 
			- Set the Senpai role to the global variable senpaiRole 
		- Then the senpai command sets the user's role to the global senpaiRole variable 
	- Edited the README to reflect the above changes 

</blockquote>
</details>

<details>
<summary>CL-000008</summary>
<blockquote>

- Made the following changes: 
	- Added an activity that displays "Listening to Music" for the bot's activity 
	- Edited the README to reflect the above changes 

</blockquote>
</details>

<details>
<summary>CL-000007</summary>
<blockquote>

- Made the following changes: 
	- Fixed bug with keep_alive.js (that I think I caused)
		- Made it a little neater and made the URL's output a bit more informative 
		- Now just referencing keep_alive.js in index.js directly instead of having http forwarding inside the index 
	- Edited the README to reflect the above changes 

</blockquote>
</details>

<details>
<summary>CL-000006</summary>
<blockquote>

- Made the following changes: 
	- Made it so that the bot makes sure that it's playing the stream every 60 minutes and starts playing again 
	- Made it so that the bot makes sure that it's playing the stream every time a command is entered 
	- Edited the README to reflect the above changes 

</blockquote>
</details>

<details>
<summary>CL-000005</summary>
<blockquote>

- Made the following changes: 
	- Added more support for keeping the replit alive in between UptimeRobot pings 
	- Added support for keeping the replit alive using UptimeRobot by allowing the IDE to be forwarded 
	- Edited the README to reflect the above changes 

</blockquote>
</details>

<details>
<summary>CL-000004</summary>
<blockquote>

- Made the following changes: 
	- Adding keep_alive.js file and reference in index.js to hopefully help replit keep the project running for longer inbetween UptimeRobot pings 
	- Edited the README to reflect the above changes 

</blockquote>
</details>

<details>
<summary>CL-000003</summary>
<blockquote>

- Made the following changes: 
	- Added the art to the repo directly 
	- Changed reference to art in README to this repo's copy 
	- Edited the README to reflect the above changes 

</blockquote>
</details>


<details>
<summary>CL-000002</summary>
<blockquote>

- Made the following changes: 
	- Removed references to the client server from index.js as I am no longer using it 
	- Added .replit file 
	- Edited the README to reflect the above changes 

</blockquote>
</details>

<details>
<summary>CL-000001</summary>
<blockquote>

- Made the following changes: 
	- Added the link to the config 
	- Added the channel ID to the config 
	- Edited the README to reflect the above changes 

</blockquote>
</details>

<details>
<summary>CL-000000</summary>
<blockquote>

Initial upload 

</blockquote>
</details>

</blockquote>
</details>
