const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();


app.get('/',(req, resp) => {
  resp.send({
    name: 'mohit',
    job: ['sleep', 'study']
  });
});

app.get('/error',(req,resp) => {
  resp.send('<h1>this is an error.</h1>');
});

/*********** Middleware *******************/
app.use((req, resp, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;

  console.log(log);
  fs.appendFile('server.log', log + '\n', (err) => {
    if(err){
    console.log('some error');
    }
  });
  next();
});


app.use((req,res,next) => {
  res.render('maintenance.hbs', {
    msg: 'Sorry for the inconvenience.'
  });
});

app.use(express.static(__dirname + '/public'));



/*************  templating engine   **************/
//handlebars view engine - handlebarsjs.com
//hbs module: wrapper around handlebars

//setting partials - you can provide multiple path for partials
//hbs.registerPartials(__dirname + '/views/partials/1');
hbs.registerPartials(__dirname + '/views/partials');

//register functions to be used in templates
hbs.registerHelper('getCurYear',() => {
  return new Date().getFullYear();
});

hbs.registerHelper('uppercase',(text) => {
  return text.toUpperCase();
});

//app.set('view engine','hbs');
app.get('/about',(req,resp) => {
  resp.render('about.hbs',{
    name: 'mohit agarwal'
  });
});

// this is to set your own views path: app.set('views', __dirname);
app.get('/home',(req,resp) => {
  resp.render('home.hbs',{
    name: 'mohit agarwal',
    welcome: 'How are you??'
  });
});

app.listen(2400, () => {
  console.log('server is up on port 2400');
});