# Authentification & Authorization

## Implemen Authentification

### pre-setup
`Todo` 
* in authController, postSignup
* get email, password, confirmPassword sent by the form
* make sure there is not a duplicated email
User.findOne({email: email}).then().catch(err => {})

* if find, redirect to /signup
* else create a User then save
* change user model to have a password field (then update all user creations)
* save the user and then redirect to /login page if created successfully


### Password Encryption

npm install --save bcryptjs

const bcrypt = require('bcryptjs')
**Todo**
`encrypt password`
* in auth.js: bcrypt.hash(password, 12) to hash, the method return a promise with result hashedPassword (nested promise)
* use the hashedPassword instead of password to create the user record
* signup with a other account to know if it work
* delete the user with insecure password
  `signin`
* in auth.js controller, postLogin: if user doesn't exist (email not found) redirect to login 
* use bcrypt.compare(password, user.pasword) which also return a promise with result true or false.
  * If false, redirect to login
  * If true, set the sessions
`route protections`
* create a middleware folder in root folder
* create middleware/is-auth.js
* import and use is-auth in admin.js by adding it as handler (we can add as many handler as we want): router.get('/', isAuth, adminController.getAddProduct)
* check if it's work
`CSRF Attacks`
Cross Site Request Forgery (hacker abuse a user with a logged in sessions)
To protect we want to make sure user can only use the session if they are using my views (frontend)
A new token is generated for every page rendered so we can accept sensitive things only from this page

`npm install --save csurf`
const csrf = require('csurf')

const csrfProtection = csrf()

app.use(csrfProtection)


**todo**
* Install csurf and use it's middleware for csrf Protections
* Make sure that the app fail if csrf is not available on the app
* for each page render add csrf in hidden input and take the value from req.csrfToken()
* the hidden input should have a name _csrf
* use res.locals to set locals variable like isAuthentificated and csrfTokenn in a custom middleware (remember, middleware are before the routes)
* add csrfotoken input in all the form of views
`package to use`
as csurf is deprecated, use: https://www.npmjs.com/package/csrf-csrf

`fix the order button`
* remove the necessity for name of user

`providing user feedback (flash message)`
npm install --save connect-flash
const flash = require('connect-flash')

* add the flash middleware app.use(flash()) which wil create a flash method for req: req.flash('error', 'invalid') before the redirection
* use req.flash('error') to get the value 'invalid' 
* make sure the flash work for loggin
