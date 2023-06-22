# Node js Setup and use

## Terminal Commnds
**Node interactive mode (REPL)**

```
  node
```

**Node js file run**

```bash
  node <filename>
  node first-app.js
```

## Create and Read files

**write a new file**
``` js
  require('fs')  //file system module
  fs.writeFileSync('hello.txt', 'Hello from Node.js'); //write (create) file
```
**read a file**
``` js
  const fs = require('fs');
  const text = fs.readFileSync('hello.txt').toString(); //read file
  console.log(text);
```

## Setup project
**create root file app.js**
``` js
  const http = require('http');
  const fs = require('fs');
  /* 1-Create a server only once */
  const server = http.createServer((req, res) => { 
    /* request and respond */
    console.log(req);
    const url = req.url
    if (url === "/") {
      res.write('<html>')
      res.write('<body><form action="/message", method="POST"><input type="text" name="message" /></form></body>')
      res.write('</html>')
      return res.end()
    }
    if (req.url === '/message' && req.method ==='POST') {
      /* to Get data: to organise all ours data in a body variable : Steam-Buffer because data are shunked by default */
      const body = []
      /* listen data event:  */
      req.on('data', (chunk) => { 
        //fun excuted on each received data
        body.push();
      })

      return req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString() /* convert to string because we know data is string */
        const message = parsedBody.splot('=')[1] /* take the element after the = (because the data is 'inputName=fasdfsdsf'*/
        fs.writeFile('message.txt', message, (err) => {
          /* fun called after the writeFile: err is null if no error */

          /* writte the message in a new file */
          res.statusCode = 302 //redirect code
          res.setHeader('Location', '/')
          return res.end()
        });

      })

    }
    res.setHeader('Content-Type', 'test/html');
    res.write('<html><head><title>My First Page</title></head><body>Hellow fromm Node js</body></html>')
    res.end() //write will through a error after this end()
    // process.exit()
  }); 
  /* port: 3000 */
  server.listen(3000);
```	

**create a file routes.js**

``` js
  const server = http.createServer(requestHandler())
```

## Npm

### Script to watch server

**create npm start command with nodemon**
`--save-dev: install the package only for developpement (so it intall the package directly on the project)`
``` bash
  npm init1
  npm i nodemon --save-dev
``` 
``` json
  "start": "monnode app.js" //package.json
``` 
