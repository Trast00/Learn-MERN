const MongoClient = require('mongodb');
const connectionURI = 'mongodb+srv://dickoallassanedev:vnemMIRIf03kL32Z@cluster0.o9vkx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'//
const dbName = "learnNode"
let _db;

const mongoConnect = (callback) => {
    // check if env variables are set
    if(!connectionURI || !dbName) {
      console.log("Connection URI or dbName not set")
      return
    }
    
    MongoClient.connect(connectionURI).then(client => {
        _db = client.db(dbName)
        console.log("Connected to testDatabase")
        callback()
        dbLoaded = true
    }).catch(err => {
        console.log(err)
    })
}

const getDb = () => {
    if(_db) {
        return _db
    }
    throw new Error("Db doesn't exist: connexion to testDatabase probably failed")
}

module.exports = {mongoConnect, getDb}