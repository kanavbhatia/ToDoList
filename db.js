const mongoClient = require('mongodb').MongoClient;
let dbuser = 'kanav';
let dbpassword = 'papa13';
const url = `mongodb://${dbuser}:${dbpassword}@ds137605.mlab.com:37605/todolist`
let collection = ''
let dbname = 'todolist'

function connect(){
    mongoClient.connect(url, function(error, client){
        if (error) throw error;
        console.log('Connected successfully to database');
        let db = client.db(dbname);
        collection = db.collection('list')
})
}
//inserting data in database
function dataSend(value){
 collection.insertMany([value], function(err,result){
    if (err) throw err;
    console.log(result)
})
}
//taking out data from database
function dataRecieved(){
    collection('tasks').find({}).toArray(function(err,result){
        if (err) throw err;
        console.log(result);
    })
}

module.exports ={
    connect,
    dataSend,
    dataRecieved
}
