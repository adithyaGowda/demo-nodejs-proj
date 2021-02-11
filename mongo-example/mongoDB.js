const mongodb = require('mongodb');

var mongoClient = mongodb.MongoClient;

var url = "mongodb://localhost:27017/testdb";

mongoClient.connect(url, (err, db) => {
    if(err){
        console.log(err);
    }else{
        console.log(`Connected to ${url}`);
        db.close();
    }
});
