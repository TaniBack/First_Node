var http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Create a server object
const server = http.createServer(function (req, res) {
	
	// http header
	res.writeHead(200, {'Content-Type': 'text/html'});
	
	var url = req.url;

    if(url ==='/index') {
		res.write(' Welcome!');
		res.end();
    }

	else if(url ==='/about') {
		res.write(' Who we are');
		res.end();
	}

    else if(url ==='/what') {
		res.write(' What we do');
		res.end();
	}

    else if(url ==='/where') {
		res.write(' Where we are');
		res.end();
	}

	else if(url ==='/contact') {
		res.write(' Contact us');
		res.end();
	}
	else {
		res.write('Working on it!');
		res.end();
	}
}).listen(3000, function() {
	
	// The server object listens on port 3000
    console.log(`Server running at http://${hostname}:${port}/`);
});