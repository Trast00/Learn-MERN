const express = require('express')
const app = express();
const adminData = require('./routes/admin.js')
const usersRouter = require('./routes/users.js')
const bodyParser = require('body-parser')

/* config */
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended: false}))


app.use('/users', usersRouter)
app.use('/', adminData.router)

const PORT = 3005
app.listen(PORT)