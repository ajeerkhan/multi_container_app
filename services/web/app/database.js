let mongoose = require('mongoose');

const server = process.env.DB_SERVER || 'mongodb:27017'; 
const database = process.env.DB_DATABASE || 'db';
const conString = `mongodb://${server}/${database}`;
class Database {
  constructor() {
    this._connect();
    mongoose.Promise = global.Promise;
  }
  
_connect() {
   const options = {
    useNewUrlParser: true,
   }
     mongoose.connect(conString, options)
       .then(() => {
         console.log(`Database connected succesfully.: ${conString}`);
       })
       .catch(err => {
        console.log(`Database connection failed.: ${conString}, eror -> ${err}`);
       })
  }
}

module.exports = new Database()