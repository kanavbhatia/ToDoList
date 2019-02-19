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
        useNewUrlParser: true
})
}
//inserting data in database
// function dataSend(value){
//  collection.insertMany([value], function(err,result){
//     if (err) throw err;
//     console.log(result)
// })
// }

//taking out data from database
function dataSendBack(cb){
    collection.find({}).toArray(function(err,result){
    if (err) throw err;
    console.log(result);
    arr = []
    for(i = 0; (i<result.length); i++){
        arr.push(result[i].body)
    }
    cb(arr)
})
}
function dataAdd(data){
    collection.insertOne(data, function(err,result){
       if (err) throw err;
       console.log(result)
   })
   }
function dataDel(data){
    collection.deleteOne({'body': data}, function(err, res) {
        if (err) throw err;
        console.log("1 document deleted");
        // db.close();
})
}

function updateData(oldValue, newValue){
    collection.updateOne(
        {'body': oldValue},
        {$set: {'body': newValue}},
         function(err,res){
             if (err) throw err;
             console.log('Value Updated')
            //  console.log(body)
         })
}



module.exports ={
    connect,
    dataSendBack,
    dataAdd,
    dataDel,
    updateData
}
