var express = require('express')
var compression = require('compression')
var exphbs  = require('express-handlebars');

var app = express()
app.use(compression())
app.use(express.static(__dirname + '/static'))
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.render('index', {title:"Index | CS Blogs"})
})

var port = process.env.PORT || 3000; //process.evn.PORT is required to work on Azure
var server = app.listen(port, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Website live at at http://localhost:%s', port)
})
