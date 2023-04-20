const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('index', { title: 'Hello, World!' });
});

// Import routes
const routes = require('./routes')

// Use routes
app.use('/', routes)

app.listen(3000, () => {
  console.log('Server listening on http://localhost:3000');
});
