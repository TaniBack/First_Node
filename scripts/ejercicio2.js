const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

// Create a server object
const server = http.createServer ((req, res) =>  {
	
	// http header
	res.writeHead(200, {'Content-Type': 'text/html'});
	
	let url = req.url;
    let route = './';

    switch (req.url) {
        case '/index':
            route += 'pages/index.html';
            break;
        case '/about':
            route += 'pages/about.html';
            break;
        case '/what':
            route += 'pages/what.html';
            break; 
        case '/where':
            route += 'pages/where.html';
            break;
        case '/contact':
            route += 'pages/contact.html';
            break;
        default:
            console.log('The page does not exist')
            break;
    }
    fs.readFile(route, (err, data) => {
        if (err) {
            console.log(err)
            res.end()
        } else {
            res.end(data);
        }
    })
})
server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000');
})


