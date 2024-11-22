# Authenfication advanced

**TODO**
* Add reset password view
* create a route and controller (getReset) for reset the password
* pass flash message to the view (get the message with req.flash('error'))
* use require('crypto') to send token in email for security with: crypto.randomBytes(32, (err, buffer) => {})
* if there is a error, redirect to /reset
* use buffer.toString('hex') to convert to buffer to a string (which will be our token)
* Update the user schema to add resetToken and resetTokenExpiration fields
* when a token is created save in in the user with the mentioned email
* if no user with the mentioned email exist show a flash message and redirect
* in the mailSend add to html a ahref with the token in the url /reset/${token}
* Create a view for new password and create a route and controller to render it if and get the user for the token and check the token is valid (not expired), get the user, 
**Password update logic**
* create a new route and controller for new-password and postNewPassword
* add the hidden inputs fields, userId, passwordToken, _csrf token
* find a user with resetToken, and userId and not expired then update the password with a new hashedPassword and put undefined in resetToken and resetTokenExpiration

# Authorization