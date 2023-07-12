# SQL and NoSQl

## Setup MySQL

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

in app.js
```js
  const db = require('./utils/database')
  db.execute('SELECT * FROM products')
  /* db.end() when the app is shuting down */
```

## SQL Basics