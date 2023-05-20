const express = require('express')

const app = express()

app.get('/user', (req, res, next) => {
  console.log("Log from user page")
  
  res.write('<html>')
  res.write('<body><h1>Hello express! from user</h1></body>')
  res.write('<html/>')
  res.send()
})

app.get('/', (req, res, next) => {
  console.log("Log from main page")
  res.write('<html>')
  res.write('<body><h1>Hello express! from main</h1></body>')
  res.write('<html/>')
  res.send()
})

app.listen(3000)