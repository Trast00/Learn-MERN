# Cookies and Session

## Cookies
allow to save data so we know if the user have logged in even after refreshing the page
**cookies data are seend with every request**
**most the time we don't set cookies ourself**
```js
// to make a request set cookies before sending the response
// ???  copilot: res.cookie('name', 'value', {options});
exports.postLogin = (req, res, next) => {
  // create  a cookies with name=loggedIn and value=true
  res.setHeader('Set-Cookie', 'loggedIn=true')

  // cookies data are seend with every request
  res.setHeader('Set-Cookie', 'loggedIn2=true; Max-Age=10')  // after 10 second the cookie will auto delete
  res.setHeader('Set-Cookie', 'loggedIn3=true; Expires=')
  res.setHeader('Set-Cookie', 'loggedIn4=true; Secure') // cookies will be set only when using https
  res.setHeader('Set-Cookie', 'loggedIn5=true; HttpOnly') // client site js codes (react, and clients codes that the user can edit) cannot access the cookie which protect us from cross site scripting attaques (look for the HTTP checkmark)
}

// get the cookies data in a request
exports.getLogin = (req, res, next) => {
  console.log(req.get('Cookie')) // aaa=ccc; loggedIn=true
  // need to manipulat the string to get the correct information ?
}
```

## Session
- save data in server session so user can't access it
- create a encrypted session id that's saved on user cookie

use `npm install --save express-session`
### Initializadtion and USE
```js
const session = require('express-session')
/*...*/
//avec les autre middleware (bodyparser, public static...)
app.use(session({secret: "my secret key lol", resave: false, saveUninitialized: false}));
// resave: fasle mean that the value is resaved only if changed
// saveUninitialized same a resave ?

//Use
exports.postLogin = () => {
  req.session.isLoggedIn = true // appear as name=connect value={encrypted}
}

exports.getLogin = () => {
  console.log(req.session.isLoggedIn) // true
}
```

## MongoDB session
to not save the session data in memory
`npm install --save connect-mongodb-session`

```js
const MongoDBStore = require('connect-mongodb-session')(session)

const app = express()
const store = new MongoDBStore({
  uri: 'mongodb connection string',
  collection: 'sessions',
  //expires: ...
})

// ...

app.use(session({
  secret: "my secret", 
  resave: false, 
  saveUninitialized: false, 
  store: store
  }))
```