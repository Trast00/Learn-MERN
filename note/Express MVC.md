# Express MVC

## Views
normal views

## Controller

- create folder project/controller

in controllers/product.js
```js
  const products = []

  exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    /* 'add-product' is the views to render add-product.ejs */
  })

  exports.postAddProduct = (req, res, next) => {
    products.push({title: req.body.title})
    res.redirect('/')
  }

  exports.getProducts = products
}
```

in routes/admin.js
```js 
  /* ... */
  const productsController = require('../controllers/products')
  /* ... */
  router.get('/add-product', productsController.getAddProduct) /* don't add parentheses */
  router.post('/add-product', productsController.postAddProduct)
  /* ... */
```

**exercice**
```js
  exports.get404page = (req, res, next) => {
    res.render('404')
  }
  /* in routes/404.js */
  const notFoundPage = require('../controllers/notFoundPage')
  router.use('/', notFoundPage.get404page)
```

## Models

- create models/product.js

### Create models
in models/product.js
```js
  const products = [];

  module.exports = class Product() {
    constructor(title) {
      this.title = title;
    }

    function save() {
      product.push(this)
    }

    static fetchAll() {
      return this.products
    }
  }
```

in controllers/products
```js
  exports.postAddProduct (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/')
  }

  exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll();
  }
```

### Save in file

create data folder

in models/product.js
```js
  const fs = require('fs') /* file save */
  /* */
  save() {
    const filePath = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json') /* data folder and products.json */
    
    fs.readFile(filePath, (err, fileContent) => {
        let products = []
        if(!err) { /* if we got no error */
          products = JSON.parse(fileContent);
        }
        products.push(this) /* this should refer to the class saved is called on */
        fs.writeFile(filePath, JSON.stringify(products), (err)=> {
          console.log(err)
        })
      }
    ); /* use for small file only */
```

### Read data

```js
  static fetchAll(callBack) {
    const filePath = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json')
    /* /!\ this is asynchronous */
    fs.readFile(filePath, (err, fileContent) => {
      if (err) {
        callBack([]) /* call the call back and give arg*/
      }
    })
    callBack(JSON.parse(fileContent))
  }
```
in products.js
```js
  /* remove : const products = Product.fetchAll() and add */
  Product.fetchAll((products) => {
    /* after the fetch */
    res.render(/* ... */)
  })
```
