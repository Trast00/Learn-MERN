import express from 'express';
const app = express();
import path from 'path';
import bodyParser from 'body-parser';
import './models/user.js';
import './models/favorite.js';
import './models/pet.js';

/* internal import */
import adminRoutes from './routes/index.js';
import userRoutes from './routes/user.js';
import shopRoute from './routes/pets.js';
import favoriteRoutes from './routes/favorite.js'

import sequelize from './utils/database.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/* setup */
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

/* middleware */
let userId = undefined
app.use("/users/:id", (req, res, next) => {
  userId = req.params.id
  console.log("Req data: ", req.params.id)
  next()
})

app.use("*", (req, res, next) => {
  if(userId != undefined){
    req.body.userId = userId
    next()
  } else {
    res.redirect('/')
  }
})

/* routes */
app.use(adminRoutes)
app.use(userRoutes)
app.use(shopRoute)
app.use(favoriteRoutes)

sequelize.sync().then(_ => {
  app.listen(3005)
}).catch(err => {console.log("Sync Error: ", err)})