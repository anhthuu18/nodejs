const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const methodOverride = require('method-override');

const app = express();
const port = 3000;
const route = require('./routes');
const db = require('./config/db');

//Connect to DB:
db.connect();

//Static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Để có thể submit với pthuc khác post và get
app.use(methodOverride('_method'));
//XMLHttpRequest, fetch, axios,

//HTTP logger
app.use(morgan('combined'));

//Template engine:
app.engine(
  'hbs',
  handlebars.engine({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
//console.log(__dirname)

//Routes init
route(app);

//127.0.0.1
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
