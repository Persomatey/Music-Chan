var http = require('http');

http.createServer(function (req, res) 
{
	res.write("Bot is live! \n\n" + 
	"Currently playing stream from " + client.botConfig.link + " in the " + client.botConfig.channel + " Discord voice channel." + "\n\n" + 
	"(copy this URL into a service like UptimeRobot if you want to keep me running 24/7.)");
	res.end();
}).listen(8080);