const User = require('../models/user');
const bcrypt = require('bcryptjs')

exports.getLogin = (req, res, next) => {
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};

exports.getSignup = (req, res, next) => {
  res.render('auth/signup', {
    path: '/signup',
    pageTitle: 'Signup',
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {
  const {email, password} = req.body
  User.findOne({email: email})
    .then(user => {
      req.session.user = user;
      return bcrypt.compare(password, user.password)

    }).then(isValidPassword => {
      if (!isValidPassword) {
        req.session.user = undefined
        return res.redirect('/login')
      }
      req.session.isLoggedIn = true;
      req.session.save(err => {
        console.log(err);
        console.log('logged user:', req.session.user)
        return res.redirect('/');
      });
    })
    .catch(err => console.log(err));
};

exports.postSignup = (req, res, next) => {
  const {name, email, password} = req.body
  User.findOne({email: email}).then(user => {
    if(user) {
      console.log('the user already exist')
      return res.redirect('/signup')
    }
    console.log('creating a new user')
    bcrypt.hash(password, 12).then(encryptedPassword => {      
      const newUser = new User({name, email, password: encryptedPassword})
      newUser.save().then(result => {
        return res.redirect('/login')
      })
    })
  })
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};
