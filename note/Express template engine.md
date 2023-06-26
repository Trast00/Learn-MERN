# Express

## Express template engine

**choose a template engine**
npm install --save ejs pug express-handlebar

### Pug
**declare template engine to express**
in app.js
```js
  app.set('view engine', 'pug') `set the tempalte en`
  app.set('views', 'views') `view are in views folders`
```

**declare the views folder to express**
in app.js
```js
  app.set('views', 'views') `view are in views folders`
```

**create the view files**
shop.html
shop.pug

**render the template engine files**
res.render('shop')

**render the template engine files with variable**
res.render('shop', {title: "my shop", prods: products}) `then access prods`

**exemple of iteration over prods: products**
```pug
  h1.title #{title}
  p.description this is a shop
  main
    .grid
      each product in prods
        article.card.product-item
          header.card__header
            h1.product__title #{product.title}
            div
              img(src="url", alt="dsfs")
              p here is a description 
```

**create layout**
in layout folder create main-layout.pug
```pug
  head
    title ...
    block style
  body
    header
      h1 this is header
    
    block content
```

in the file in which we want to use the layout
```pug
  extends layouts/main-layout.pug

  block style
    link(rel="stylesheet", href="/css/forms.css")

  block content
    p this part will be injected intead of block content
    h1 Page Not Found
```

**conditionnal rendering with pug**

```js
  res.render('add-product', { pageTitle: 'Add title', path: '/admin/add-product'})
```

```pug
  a(href="", class=(path === '/admin/add-product' ? 'active' : ''))
```

## Handlebar

npm install --save express-handlebars@3.0

### set handlebar as engine

in app.js
```js
  const expressHandleBars = require('express-handlebars')

  app.engine('handlebars', expressHandleBars()) /* set handle bar as engine with name and callback initialiser */
  app.set('view engine', 'handlebars') /* handlebars should be same as engine name 'handlebars' */
```

create 404.hbs 
```hbs
  <head>
    <!-- handlebar syntax is really similar to html -->
    <title>{{ pageTitle }}</title>
  </head>
```