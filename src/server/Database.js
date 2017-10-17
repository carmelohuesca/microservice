const CONFIG = require('./CONFIG');
const MongoClient = require('mongodb').MongoClient;
const pgp = require('pg-promise')( /*options*/ );

class Database {

    static UseMongo() {
        MongoClient.connect(CONFIG.MONGO_DB, (err, db) => {
            if (err) {
                throw err;
            }
            db.collection('animals').find().toArray((err, result) => {
                if (err) {
                    throw err;
                }
                console.log(result);
            });
        });
    }

    static UsePosgre() {
        const db = pgp(CONFIG.POSTGRE_DB);
        db.one('SELECT $1 AS value', 123)
            .then(data => console.log('DATA:', data.value))
            .catch(error => console.log('ERROR:', error));
    }

}

module.exports = Database;