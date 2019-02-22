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

app.post('/add', (request,response)=>{
    let data = request.body
    console.log(data);
    taskArray.push(data)
    db.dataAdd(data)
    // db.dataSend({'task': request.body})
    response.status(200)
})

app.post('/del', (request,response)=>{
    let data = Object.values(request.body)[0];
    //to get the value from the object which we are getting
    // let data1 = request.body;
    console.log(data1);
    // console.log(data);
    let index = taskArray.indexOf(data);
    taskArray.splice(index,1);
    db.dataDel(data)
    // db.dataSend({'task': request.body})
    response.status(200)
})
app.post('/update', (request, response)=>{
    let newData = Object.values(request.body)[1];
    let oldData = Object.values(request.body)[0];
    console.log(oldData)
    console.log(newData)
    let index = taskArray.indexOf(oldData);
    taskArray[index] = newData;
    db.updateData(oldData,newData);

})

function fillList(){
    db.dataSendBack(function(body){
        for(i = 0; i<body.length;i++){
            taskArray.push(body[i])
        }
    })
}
app.get('/in_display',(request,response)=>{
    response.send(taskArray);
})
