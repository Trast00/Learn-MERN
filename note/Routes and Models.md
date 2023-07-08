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

## Models

**create Cart class**

create models/cart.js
```js
  /* ... */
  const fs = require('fs')
  const path = require('path')
  const p = path.join(
    path.dirname(processs.mainModule.filename), 'data', 'cart.json'
  )
  module.exports = class Cart {
    /* 
    If the Cart was a normal class(blueprint of object that can have multiple instance)
    constructor() {
      this.products = [];
      this.totalPrice = 0;
    } 

    As cart will have only one instance let's do it a other way
    */
   static addProduct(id, productPrice) {
    // fetch the previous cart
    fs.readFile(p, (err, fileContent) => {
      let cart = {products: [], totalPrice: 0};
      if (!err) {
        cart = JSON.parse(fileContent);
      }
    })
    // find existing product (in the cart)
    const existingProductIndex = cart.products.findIndex(prod => prod.id === id)
    const existingProduct = cart.products[existingProductIndex];
    let updatedProduct;
    if (existingProduct) {
      updatedProduct = { ...existingProduct };
      // increase quantity
      updatedProduct.quantity = updatedProduct.quantity + 1;
      cart.products = [...cart.products]; /* useless ? */
      cart.products[existingProductIndex] = updatedProduct
    } else {
      // add new product
      updatedProduct = { id: id, quantity: 1 };
      cart.products = [ ...cart.products, updatedProduct];
    }
    cart.totalPrice = cart.totalPrice + +productPrice /* add a + just after productPrice will convert it to Integer */

    // save the cart
    fs.writeFile(p, JSON.stringify(cart), err => {
      console.log(err)
    })
   }
  }
```

in controllers/shop.js
```js
  exports.postCart = (req, res, next) => {
    const prodId = req.body.productId
    Product.findById(prodId, (product) => {
      Cart.addProduct(prodId, product)
    })
    redirect('/cart');
  }
```

### Query parameter

query paramter are part after the '?'
`/products/15?edit=true`

**get data from query parameter**
req.query.edit `return a string; edit is a key`

**use filter**
products.filter(prod => prod.id !== id)