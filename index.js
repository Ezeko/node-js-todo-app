const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')
const TodoController = require('./controller/TodoController')

const port = process.env.PORT || 3000



app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public')) //look for static files in express folder
app.use(cors()) // prevent cors error
app.use(bodyParser.json()) //accepts json
app.use(bodyParser.urlencoded({extended: true})) //accepts url-encoded params

TodoController(app)

app.listen(port)
console.log(`App is running and listening to port: ${process.env.PORT? process.env.PORT: 3000}`)