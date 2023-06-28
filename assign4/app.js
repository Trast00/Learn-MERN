const express = require('express')
const app = express();
const adminRouter = require('routes/admin.js')

app.use('/', adminRouter)

const PORT = 3005
app.listen(PORT)