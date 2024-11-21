const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const MongoDBStore = require('connect-mongodb-session')(session);

const isAuth = require('./middleware/is-auth');
const { doubleCsrf } = require("csrf-csrf");

const errorController = require('./controllers/error');
const User = require('./models/user');

const MONGODB_URI =
  'mongodb+srv://dickoallassanedev:vnemMIRIf03kL32Z@cluster0.o9vkx.mongodb.net/learnNode?retryWrites=true&w=majority&appName=Cluster0';

const app = express();
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions'
});

// Middleware setup
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser('I m a cookies secret'));
app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: store
  })
);

// CSRF Configuration
const doubleCsrfOptions = {
  getSecret: () => "Im csrf secret here", // A secure secret
  getSessionIdentifier: (req) => req.session.id || "", // Session identifier
  cookieName: "psifi.x-csrf-token", // CSRF cookie name
  cookieOptions: {
    sameSite: "lax",
    path: "/",
    secure: false, // Set to true in production
    httpOnly: true,
  },
  size: 64, // Token size in bits
  ignoredMethods: ["GET", "HEAD", "OPTIONS"], // Methods to ignore
  getTokenFromRequest: (req) => req.body.CSRFToken || req.headers["x-csrf-token"], // Extract CSRF token from request
};

const {
  generateToken, // For generating CSRF tokens
  doubleCsrfProtection, // Middleware for CSRF protection
} = doubleCsrf(doubleCsrfOptions);

// Attach CSRF token to all requests
app.use((req, res, next) => {
  const newToken = generateToken(req, res)
  req.csrfToken = newToken
  res.locals.csrfToken = newToken; // Add token to locals for views
  next();
});

// Routes
app.use('/admin', isAuth, adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

// Add CSRF protection middleware
app.use(doubleCsrfProtection);

// Session user middleware
app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});


// Error handling
app.use(errorController.get404);

// Database connection
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });