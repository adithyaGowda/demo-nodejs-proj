const mongodb = require('mongodb');

var mongoClient = mongodb.MongoClient;

var url = "mongodb://localhost:27017";

mongoClient.connect(url, (err, client) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Connected to ${url}`);
        var db = client.db('testdb');

        var doc1 = { name: "john", age: 20, email: "a@abc.com" };
        var doc2 = { name: "mary", age: 25, email: "b@xyz.com" };

        db.collection('tests').insertMany([doc1, doc2], (_err, result) => {
            if (_err) {
                console.log(_err);
            } else {
                console.log("%d docs inserted", result.insertedCount);
            }
            client.close();
        });

    }
});
