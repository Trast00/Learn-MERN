# SQL and NoSQl

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
