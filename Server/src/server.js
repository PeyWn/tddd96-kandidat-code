const HTTP = require('http');
const URL = require('url');
const PATH = require('path');
const FS = require('fs');

const HOST_PATH = PATH.join(__dirname, "/../../Client/dist"); // Hardcoded right now
const PORT = 80;

HTTP.createServer(function(request, response) {
  var uri = URL.parse(request.url).pathname;
  var fileName = PATH.join(HOST_PATH, uri);

  FS.exists(fileName, function(exists) {
    if(!exists) {
      response.writeHead(404, {"Content-Type": "text/plain"});
      response.write("404 Not Found\n");
      response.end();
      return;
    }

    if (FS.statSync(fileName).isDirectory()) {
      fileName += '/index.html';
    }

    FS.readFile(fileName, "binary", function(err, file) {
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
