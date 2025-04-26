const newsRouter = require('./news');
const meRouter = require('./me');
const coursesRouter = require('./courses');
const siteRouter = require('./site');

function route(app) {
  //   app.get('/news', (req, res) => {
  //     res.render('news');
  //   });
  app.use('/news', newsRouter);
  app.use('/me', meRouter);
  app.use('/courses', coursesRouter);

  app.use('/', siteRouter);
}

module.exports = route;
