var express = require('express');
var bodyParser = require("body-parser");
const DataBase = require("./app/database");
require('dotenv').config();
const ENV = process.env;

var app = express();
const port = ENV.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

require("./app/routes/route")(app); //register routes

var server = app.listen(port, function(){
console.log("Listening on port %s", server.address().port);
console.log(`Application running in Mode ${process.env.NODE_ENV} | ${ENV.NODE_ENV}`);

const database = new DataBase();
setTimeout(()=>{
    if(!database.opened){
        console.log(`Try Connection again, current status -> ${database.opened}.`);
        database._connect()
    }
}, 3000);

 //connect mongo db.
});

