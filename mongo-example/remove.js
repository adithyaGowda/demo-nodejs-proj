const mongodb = require('mongodb');

var mongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017";

mongoClient.connect(url, (err, client) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Connected to ${url}`);
        var db = client.db('testdb');

        db.collection('tests').deleteOne({'name' : 'john'},(_err, result) => {
            if (_err) {
                console.log(_err);
            } else {
                console.log("%s",result);
            }
            client.close();
        });

    }
});
