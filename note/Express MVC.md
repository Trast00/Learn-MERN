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
