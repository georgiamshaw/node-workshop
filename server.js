const http = require("http");
const fs = require("fs");

var message = "I am so happy to be part of the Node Girls workshop";

function handler(request, response) {
  let endpoint = request.url;

  if (endpoint == "/") {
    response.writeHead(200, { "Content-Type": "text/html" });

    fs.readFile(__dirname + "/public/index.html", function(error, file) {
      if (error) {
        console.log(error);
        return;
      }
      response.end(file);
    });
  }
}

const server = http.createServer(handler);

server.listen(3000, function() {
  console.log("Server is listening on port 3000. Ready to accept requests");
});
