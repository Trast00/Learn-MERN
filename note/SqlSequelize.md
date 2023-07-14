# SQL and Sequelize

## SQL

### Setup MySQL

**install mysql**

**install npm**
npm install --save mysql2

**connect db to the project**
create in utils/database.js
```js
  const mysql = require('mysql2')
  const pool = mysql.createPool({
    host: 'localhost',
    user: 'rool', /* by default */
    database: 'node-complete', /* by default, we can create db */
    password: 'nodecomplete'  /* created during the installation */
  });

  module.exports = pool.promise() /* to return a promise */
```

### Read Data SQL
```js
  const db = require('./utils/database')
  db.execute('SELECT * FROM products').then([rows, filedData] => {
    /* rows are the datas (entries) */
  }).catch(err => {})
  /* db.end() when the app is shuting down */
```

### Insert Data SQL

```js
  db.execute(
    'INSERT INTO products (title, price, imageUrl, description) VALUES (?, ?, ?, ?)', /* we use the ? to avoid SQL injection Attack */
    [this.title, this.price, this.imageUrl, this.description]
  ) 
```

### SQL WHERE

```js
  db.execute('SELECT * FROM products WHERE products.id = ?', [id])
```

## Sequelize (ORM library)

### Setup Sequelize

**install npm package**
`npm install --save mysql2`
npm install --save sequelize

**initialize**
in  utils/database.js
```js
  const Sequelize = require('sequelize');

  cosnt sequelize = new Sequelize('node-complete', 'root', 'nodecomplete', {dialect: 'mysql', host: 'localhost'}) /* database, username, password */

  module.exports = sequelize;
```

### Create a Models Sequelize
in models/product.js
```js
  const Sequelize = require('seequelize');

  const sequelize = require('utils/database');

  const Product = sequelize.define('product', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    title: Sequelize.STRING,
    price: {
      type: Sequelize.DOUBLE,
      allowNull: false
    },
    imageUrl: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }) /* args: model-name, structure of the models */

  module.exports = Product;
```

### Create TABLE
in app.js
```js
  const sequelize = require('./utils/sequelize')
  /* ... */
  /* sync will make seq to create a table to all the models (create table if not exist) */
  sequelize.sync().then(result => {
    app.listen(3005)
  }).catch(err => {})

```

### Insert Data Sequelize

```js
  Product.create({
    title: title,
    price: price,
    imageUrl: imageUrl,
    description: description,
  }).then().catch() /* create = build + save */
```

### Read data

```js
  `get all data`
  Product.findAll()

  `find data by id`
  Product.findByPk()

  `find data with where`
  Product.findAll({where: {id: prodId}}) /* return a array */
```

### Update data

```js
  `update a product`
  Product.findById(prodId).then(product => {
    product.title = "New title"
    return product.save(); /* if the product doesn't exist, it create it */
  })
```

### Delete / Destroy product

```js
  `destroy with where condition`
  Product.destroy({/* where condition */})

  `destroy after findById`
  Product.findById(prodId).then(product => {
    return product.destroy();
  }).then(result => {
    console.log('Destroyed product')
  })
```

### create Models with relation

```js
  const Sequelize = require('sequelize');

  const sequelize = require('../util/database');

  const User = sequelize.define('user', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING,
  })
```

in app.js
```js
  Product.belongsTo(User, constrainst: true, onDelete: 'CASCADE')
  User.hasMany(Product);

  sequelize.sync({force: true} /* to replace the old table (Drop then create again*/)
  .then(result => {
    /* ... */
  })
```

### Association: One to many relationship
in app.js
```js
  Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE'})
  User.hasMany(Product)
```
