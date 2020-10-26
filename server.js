let express = require('express');
let app = express();
let port = process.env.PORT || 6969;
let bodyParser = require('body-parser');

//route files
let recipe = require('./routes/recipe');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PATCH,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res, next) {
    res.send('hello and welcome to scrapr')
})

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//routes
app.use('/recipe', recipe)

app.listen(port, function(){
    console.log(`listening on port ${port} bitch`)
})