const http = require("http");
const fs = require("fs");

var message = "I am so happy to be part of the Node Girls workshop";

function handler(request, response) {
  let endpoint = request.url;

  // if (endpoint === "/") {
    console.log("indexendpoint")
    response.writeHead(200, { "Content-Type": "text/html" });
console.log(endpoint);
    fs.readFile(__dirname + "/public/index.html", function(error, file) {
      if (error) {
        console.log(error);
        return;
      }
      response.end(file);
    });
  // }
  // else if (endpoint.indexOf("public") !== -1) {
  //   console.log(endpoint);
  //   let extension = endpoint.split(".")[1];
  //   let extensionType = {
  //   html: "text/html",
  //   css: "text/css",
  //   js: "text/javascript",
  //   ico: "image/x-icon"
  // };
  // let filePath = path.join(__dirname + "..", endpoint);
  //   fs.readFile(filePath, (error, file) => {
  //     if (error) {
  //       console.log(error);
  //     } else {
  //     response.writeHead(200, { "Content-Type": extensionType[extension]});
  //     response.end(file)
  //   };
  //   });
  // }
}

const server = http.createServer(handler);

server.listen(3000, function() {
  console.log("Server is listening on port 3000. Ready to accept requests");
});
