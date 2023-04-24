const express = require('express');
const path = require('path')
const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use('/static', express.static(path.join(__dirname, '/public')))

app.get('/', (req, res) => {
  res.render('index', { title: 'Hello, World!' });
});

// Import routes
const routes = require('./routes')

// Use routes
app.use('/', routes)

app.use((req, res, next) => {
  console.log(req.url)
  next()
})

// 404 error handleing



// app.listen(3000, () => {
//   console.log('Server listening on http://localhost:3000');
// });

// server http
const http = require('http')
const PORT = process.env.PORT || 6000 //first checks for environment variable delcaring port number, if not defualt 5000
const server = http.createServer(app)
server.listen(PORT, () => {
  console.log(app.get('views'))
})

