const express = require('express')
const app = express()
const path = require('path')
const users = require('./models/user')
const bodyParser = require('body-parser')

/* internal import */
const adminRoutes = require('./routes/index')
const userRoutes = require('./routes/user')
const shopRoute = require('./routes/shop')
const sequelize = require('./utils/database')


/* setup */
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

/* middleware */
/* routes */
app.use(adminRoutes)
app.use(userRoutes)
app.use(shopRoute)

sequelize.sync().then(result => {
  console.log("RESULT:",result)
  app.listen(3005)
}).catch(err => {console.log("Sync Error: ", err)})