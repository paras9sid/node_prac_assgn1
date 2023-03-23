const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Home url</title></head>");
    res.write("<body><h1>Some Greetings text</body>");
    res.write("</html>");
    res.end();
  }
  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>Dummy users</title></head>");
    res.write("<body><ul><li>User1</li><li>User2</li></ul></body>");
    res.write("</html");
    res.end();
  }
  //   res.setHeader("Content-Type", "text/html");
});

server.listen(3000);
