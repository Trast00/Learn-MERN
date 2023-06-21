const http = require('http')
const express = require('express')
const app = express()
const server = http.createServer(app)
const indexRouter = require('./routes/index.js')
const userRouter = require('./routes/users.js')

//public folder static
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/', userRouter)

server.listen(3006)