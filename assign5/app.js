const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

/* internal import */
const adminRoutes = require('./routes/index')
const userRoutes = require('./routes/user')
const shopRoute = require('./routes/shop')


/* setup */
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

/* middleware */
/* routes */
app.use(adminRoutes)
app.use(userRoutes)
app.use(shopRoute)

app.listen(3005)