const express = require('express');
app = express();
const port = process.env.PORT || 5000;
const path = require('path');
app.use('/',express.static(path.join(__dirname,'public')));
let taskArray = [];
let db = require('./db');

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.text())
app.use(bodyParser.json())



app.listen(port, function(){
    console.log(`Process is running at Port number ${port}`);
    db.connect();
})

app.post('/list', (request,response)=>{
    console.log(request.body);
    response.status(200)
    db.dataSend({'task': request.body})
    
})
