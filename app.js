const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const Nexmo = require('nexmo');
const socketio = require('socket.io');

//Init
const app = express();

//Template Engine Setup
app.set('view engine','html');
app.engine('html',ejs.renderFile);

//Public folder setup
app.use(express.static(__dirname + '/public'));

//Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Index route
app.get('/',(req,res) => {
    res.render('index');
});

//Catch form submit
app.post('/',(req,res) => {
    res.send(req.body);
    console.log(req.body);
});

//Define port
const port = 5000;

//Start server
const server = app.listen(port, () => console.log(`Server started on port ${port}`));
