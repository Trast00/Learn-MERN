# Express Basics

## Installation
npm install --save express

## Express
``` js
  const http = require('http')
  
  const express = require('express')
  const app = express()
  const server = http.createServer(app)
  server.listen(3003)
```

## Middleware
``` js
  const express = require('express')
  const app = express()
  // use is excuted for any incoming req
  app.use((req, res, next) => {
    console.log("In the middleware!")
    
    //next allow to use a other middleware
    next();
  });

  // can run only if the previous midlleware invoked next()
  app.use((req, res, next) => {
    console.log('A other middleware')

    // there is no next(): will not allow any new middleware 

    // send a respond
    res.send('<h1>Hello From Expresss!</h1>')
  })

  app.listen(3000)
```

## Routes

### Single File
``` js
  const express = require('express')
  const app = express()

  /* use body parser to parse the contain of body element sended (by xpress)after a post request */
  const bodyParser = require('body-parser') //npm i --save body-parser

  app.use(body.urlencoded(extended: false)) /* cannot parse files */

  // a
  app.use('/', (req, res, next) => {
    /* This always run */
    console.log('This always run')
    next()
  })

  // form that will POST in this route
  app.use('/add-product', (req, res, next) => {
    //send add product page
    res.send('<form action="/" method="POST"><input type="text" name="product-name" /><button type="submit">Send</button></form>')
  })

  // app.post listen to only POST request
  app.post('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
  })

  /* should be after the add product cause "/add-product" match "/" */
  app.use('/', (req, res, next) => {
    //send add product page
    res.send('<h1>Home page</h1>')
  })
```

### Mutiple Files
**put routes in files in a routes folder**

**routes/admin.js**
``` js
  const express = require ('express');
  const router = express.Router();

  router.get('/add-product', (req, res, next) => { /* just replace app.use by router.use */
    res.send('...')
  });

  router.post('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
  });

  module.exports = router
  ` can also
  export.routes = router
  export.products = products
  `
```
**app.js**
```js
  const adminRoutes = require('./routes/admin')
  /* ... */
  app.use('/admin', adminRoutes)
  /* ... */
```
**handle 404**
```js
  /* ... */
  router.get('/', (req, res, next) => {
    res.status(404).send('<h1>404 not found</h1>')
  })
```



## Html files
**create html files in  view**

**routes.js**
```js
  const path = require('path') /* to convert path to absolute path as only absolute path are accepted */

  /* in the route.js */
  res.sendFile(path.join(_dirname), '../','views', 'shop.html')
  res.sendFile(path.join(_dirname), '../', 'views', 'add-product.html')

  /* in the app.js */
  res.sendFile(path.join(_dirname), '../', 'views', 'add-product.html')

```
**app.js**
```js 
  /* ... */
  res.sendFile(path.join(_dirname), 'views', '404.html')

```

**use if import is depracated**
module.exports = path.dirname(require.main.filename);

**use helper to clean paths code**
utils/path.js
```js
  const path = require('path');
  /* path.dirname return the path to the filename given: we will give the app.js file with process.mainModule.filename (which return the path for app.js as it's the file responsible for app runing) */
  module.exports = path.dirname(process.mainModule.filename)
```
utils/path.js
```js
  const rootDir = require('../utils/path')
  /* */
  res.sendFile(path.join(rootDir, 'views', 'shop.html'))
```

## CSS files

**create them in public/css/**
app.js

```js
  /* imports ... */
  app.use(express.static(path.join(__dirname, 'public')));
  /* routes ... */
```

```html
  <link rel="stylesheet" href="/css/main.css">
  <link rel="stylesheet" href="/css/add-product.css">
```