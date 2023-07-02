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