const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');


const app = express();
app.use(cors());

const fs = require('fs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const routes = require('./api/routes/studentsListRoutes.js')(app,fs);

const server = app.listen(3001,() =>{
	console.log('listening on port :',server.address().port);
});

// var express = require('express'),
//   app = express(),
//   port = process.env.PORT || 3000;

// app.listen(port);

// console.log('students list RESTful API server started on: ' + port);