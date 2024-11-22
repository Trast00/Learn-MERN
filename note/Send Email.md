# Sendgrid 

- Allow track email opening

**npm**
npm install --save nodemailer nodemailer-sendgrid-transport


```js
const transporter = nodemailer.createTransport(sendgridTransport({
  auth: {
    api_key: 'get from the site',
  }
}))

// ...

//to send a email
transporter.sendMail({
  to: '',
  from: '',
  subject: '',
  html: '',
}).catch(err => {})
// put sendMail after the redirection so it and return the sendMail so we can catchs it's error in the then catch
```
