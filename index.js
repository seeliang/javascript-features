const express = require('express');
const path = require('path');

const pathTo = {
  static: path.join(__dirname, 'features'),
};
const web = express();

web.set('view engine', 'ejs');

web.get('/', (req, res) => res.render('main', { title: 'Home', message: 'Hello there! homepage for you' }));
web.get('/hi', (req, res) => res.render('main', { title: 'Hi', message: 'Hi guys!' }));
console.log(pathTo);
web.use('/static', express.static(pathTo.static));

web.listen(8000, () => console.log('start at port localhost:8000'));