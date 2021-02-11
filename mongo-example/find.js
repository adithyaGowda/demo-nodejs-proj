const mongodb = require('mongodb');

var mongoClient = mongodb.MongoClient;

var url = "mongodb://localhost:27017";

mongoClient.connect(url, (err, client) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Connected to ${url}`);
        var db = client.db('testdb');

        db.collection('tests').find().toArray( (_err, result) => {
            if (_err) {
                console.log(_err);
            } else if(result.length){
                console.log(result);
            }else{
                console.log("No matches found");
            }
            client.close();
        });

    }
});
