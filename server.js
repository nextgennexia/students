var express = require('express');
var app = express();

const STATIC_PATH = 'public';

app.use('/', express.static(STATIC_PATH));

app.listen(8080, function() {
  console.log('App listening on port 8080');
});