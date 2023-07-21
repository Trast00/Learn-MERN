const express = require('express')
const app = express()
const adminRoutes = require('./src/routes/index')

/* setup */
app.set('view engine','ejs')

/* middleware */
/* routes */
app.use(adminRoutes)


app.listen(3005)