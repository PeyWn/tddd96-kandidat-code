const http = require('http');
const url = require("url");
const path = require("path");
const fs = require("fs");

const HOST_PATH = path.join(__dirname, "/../../Client/dist"); // Hardcoded right now
const PORT = 80;

http.createServer(function(request, response) {
  var uri = url.parse(request.url).pathname;
  var fileName = path.join(HOST_PATH, uri);

  fs.exists(fileName, function(exists) {
    if(!exists) {
      response.writeHead(404, {"Content-Type": "text/plain"});
      response.write("404 Not Found\n");
      response.end();
      return;
    }

    if (fs.statSync(fileName).isDirectory()) {
      fileName += '/index.html';
    }

    fs.readFile(fileName, "binary", function(err, file) {
      if(err) {
        response.writeHead(500, {"Content-Type": "text/plain"});
        response.write(err + "\n");
        response.end();
        return;
      }
      response.writeHead(200);
      response.write(file, "binary");
      response.end();
    });
  });
}).listen(PORT);
