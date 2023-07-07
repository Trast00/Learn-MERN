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
      res.render('shopp/product-detail', {
        pageTitle: product.title,
        path: `/product/${product.id}`
        product: product
        })
    })
    console.log()
  }
  /* ... */
```

### Post data (passing data product)

**adding product to card features**
views/product-detail 
```js
  <form action="/cart" method="POST">
    <input type="hidden" name="productId" value="<%= product.id %>" />
    <button type="submit">Add to cart</button>
  </form>
  /* update the part above to usee partial */
  <%- includes('../includes/add-to-cart.ejs', 
  /* if include is in loop we need to pass the data as it will not have access to it directly */
  {product: product}) %>
```
controllers/shop.js
```js
  exports.postCart = (req, res, next) => {
    const prodId = req.body.productId
    console.log(prodId)
    res.redirect('/cart');
  };
```

routes/shop.js
```js
  /* ... */
  router.post('/cart', shopController.postCart)
  /* ... */
```