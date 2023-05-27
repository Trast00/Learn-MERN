const express = require('express')
const app = express()
const path = require('path')
const indexRouter = require('./routes/index.js');
const usersRouter = require('./routes/users.js');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter)

app.listen(3005)