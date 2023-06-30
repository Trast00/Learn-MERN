const express = require('express')
const app = express();
const adminRouter = require('./routes/admin.js')
const usersRouter = require('./routes/users.js')

app.set('view engine','ejs')
app.use('/users', usersRouter)
app.use('/', adminRouter)

const PORT = 3005
app.listen(PORT)