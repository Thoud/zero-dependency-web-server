// Dependencies
const http = require('http');
const fs = require('fs');

// Server with all routings
const server = http.createServer((req, res) => {
  // Basic route for serving index.html
  if (req.url === '/' || req.url === '/index.html') {
    fs.readFile('./public/index.html', (error, data) => {
      // Throwing an error if one comes up
      if (error) throw error;
      // Serving the data to the client
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }

  // Route for serving index.css
  else if (req.url === '/index.css') {
    fs.readFile('./public/index.css', (error, data) => {
      if (error) throw error;
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.write(data);
      res.end();
    });
  }

  // Route for serving the index.html inside of the memes folder
  else if (
    req.url === '/memes' ||
    req.url === '/memes/' ||
    req.url === '/memes/index.html'
  ) {
    fs.readFile('./public/memes/index.html', (error, data) => {
      if (error) throw error;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }

  // Route for serving the image inside of the memes folder
  else if (req.url === '/memes/1.jpg') {
    fs.readFile('./public/memes/1.jpg', (error, data) => {
      if (error) throw error;
      res.writeHead(200, { 'Content-Type': 'image/jpeg' });
      res.write(data);
      res.end();
    });
  }

  // Route for an invalid request
  else {
    res.writeHead(404);
    res.end();
  }
});

// Initiate the server on Port 3000 and returning a message
server.listen(3000);
console.log('Web Server listening on port 3000...');
