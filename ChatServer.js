var WebSocketServer = require('websocket').server;
var http = require('http');

var port=9000;

var clients=[];

console.log(`Starting to listen on port ${port}`);
var server = http.createServer(function(request,response){
	//no code here cause we're going to use websockets
});


server.listen(port,function(){
	
});

wsServer=new WebSocketServer({httpServer:server});

wsServer.on('request',function(request){
	var connection = request.accept(null,request.origin);
	console.log(`   New request from ${request.origin}`);
	clients.push(connection);

	connection.on('message',function(message){
		console.log(message);
		if(message.type=='utf8'){
			//process the incoming message
			console.log(message);
		}
	});

	connection.on('close',function(connection){
		//close the connection
	});
});