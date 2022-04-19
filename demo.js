var http = require('http');
var url = require("url");
var fs = require("fs");

http.createServer(function (req, res) {
  // console.log("hi");
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Hello World <br/>");
  res.write("this is another line <br/>");
  res.write("The url is " + req.url + "<br/>");
  res.write("Success");
  res.write("<hr>");
  res.end();

  // res.end();
}).listen(8080);