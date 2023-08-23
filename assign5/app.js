import express from 'express';
const app = express();
import path from 'path';
import bodyParser from 'body-parser';
import './models/user.js';
import './models/cart.js';
import './models/pet.js';

/* internal import */
import adminRoutes from './routes/index.js';
import userRoutes from './routes/user.js';
import shopRoute from './routes/pets.js';

import sequelize from './utils/database.js';

const currentModuleUrl = new URL(import.meta.url);
const __dirname = path.dirname(currentModuleUrl.pathname);

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