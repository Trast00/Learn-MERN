# Dynamic routing and advanced models

## Dynamic routing

### Add data to routes

```js
  <a href="/products/<%= product.id %>">Detail</a>
```

### get data to routes

routes/product.js
```js
  router.get('/products/:productId');
```
controllers/shop.js
```js
  /* ... */
  exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    console.log(prodId)
  }
  /* ... */
```