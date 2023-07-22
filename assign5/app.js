const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const adminRoutes = require('./routes/index')

/* setup */
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended: false}))

/* middleware */
/* routes */
app.use(adminRoutes)

app.listen(3005)