let mongoose = require('mongoose');

const server = process.env.DB_SERVER || 'mongodb:27017'; 
const database = process.env.DB_DATABASE || 'db';
const conString = `mongodb://${server}/${database}`;

class Database {
  constructor() {
    mongoose.Promise = global.Promise;
    this._opened=false;
    this._connect();
  }
  get opened() {
    return this._opened;
  }

_connect() {
   const options = {
    useNewUrlParser: true,
   }
     console.log(`Envionment variables are => ${JSON.stringify(process.env)}`);
     mongoose.connect(conString, options)
       .then(() => {
         this._opened=true;
         console.log(`Database ${conString} connected, status is => : ${this._opened}`);
       })
       .catch(err => {
        this._opened=false;
        console.log(`Database ${conString} connection failed, eror -> ${err}`);
       })
  }
}

module.exports = Database