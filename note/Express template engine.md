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

### convert project to handlebar

**conditional and loop in handlebar**
```handlebars
  <!-- # is used for content that doesn't just return a text so for conditionnal render or loop -->
  {{#if hasProduct }} <!-- hasProducts: products.length > 0 -->
  <div class="grid">
    {{#each prods}}
    <article>
      <header>
        <h1>{{ this.title }}</h1>
      </header>
    </article>
    {{/each}}
  </div>
  {{ else }}
    <h1>No products Found</h1>
  {{/if}}
```

### Layout in handlebars

**set layout Directory and Default**
in app.js
```js
  /* set layout directory and default layout (optional) */
  app.engine('handlebars', expressHandleBars({layoutDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'})) /* extname is usefull only for layout use */
```

**create layouts**
create layout folder and main-layout.hbs
in main-layout.hbs
```handlebars
  <head>
    <!-- ... -->
    <!-- add dynamic link to css -->
    {{#if formsCSS }}
    <link rel="stylesheet" href="/css/forms.css">
    {{/if}}
    {{#if productsCSS }}
    <link rel="stylesheet" href="/css/products.css">
    {{/if}}
  </head>
  <body>
    <header>
      <nav class="{{#if activeShop}}active{{/if}}">
        This is navbar
      </nav>
    </header>
    {{{ body }}} <!-- yes 3 {} -->
  </body>
  <!-- activeShop and productsCSS are data passed by shop.js and product.js -->
```

in shop.js (or product.js)
```js
  res.render('shop', {
    prods: products, /* array */
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
    /* layout: false*/  /*to not use the default layout (can be omitted if needed */
  })
```

## Ejs

### Set engine

```js
  app.set('view engine','ejs')
```

### Use of Ejs
```js
  <%= %> /*To render text or data */
  <% %> /*To writte js code */
  <%- %> /*To render html code for partials */
```
```js
  <head>
    <title><%= pageTitle %></title>
  </head>
  <body>
    <% if (prods.length > 0) { %>
      <div>
        <% for(let product of prods) { %>
          <article>
            <header><%= product.title %></header>
          </article>
        <% } %>
      </div>
    <% } else { %>
      <p>Nothing found!</p>
    <% } %>
  </body>
```

### partials
create a folder **views/includes**
**create files head.ejs**
```js
  <head>...</head>
```
**create files navigation.ejs**
**create files end.ejs**

**to importe a partials**
```js
  <%- include('includes/head.ejs') %> /* path from current file */
  <body>
    <div class="<%= path === '/admin/add-product' ? 'active' : '' %"></div>
  </body>
```