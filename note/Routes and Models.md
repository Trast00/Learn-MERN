# Dynamic routing and advanced models

## Dynamic routing

### Add data to routes

```js
  <a href="/products/<%= product.id %>">Detail</a>
```

### get data from routes

routes/product.js
```js
  router.get('/products/:productId');
```
controllers/shop.js
```js
  /* ... */
  static findById(id, cb) {
    getProductsFromFile(products => {
      const product = products.find(p => p.id === id);
      cb(product);
    })
  }
  /* ... */
  exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
      console.log(product)
    })
    console.log()
  }
  /* ... */
```