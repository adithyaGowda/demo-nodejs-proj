const http = require('http');
const url = require('url');

function startServer(route, handle) {
    http.createServer((req, res) => {
        var reviewData = '';
        var pathName = url.parse(req.url).pathname;
        console.log(`Requested url path is ${pathName}`);
        req.setEncoding('UTF8');
        req.addListener('data', (chunk) => {
            reviewData += chunk;
        });
        req.addListener('end', () => {
            route(pathName, handle, res, reviewData);
        });

    }).listen(3000, () => {
        console.log("Server is running goto : http://localhost:3000");
    });
}

exports.startServer = startServer;

