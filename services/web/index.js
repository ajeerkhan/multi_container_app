var express = require('express');
var bodyParser = require("body-parser");
const DataBase = require("./app/database");
require('dotenv').config();

var app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

require("./app/routes/route")(app); //register routes

var server = app.listen(port, function(){
console.log("Listening on port %s ", server.address().port);

const database = new DataBase();
setTimeout(()=>{
    if(!database.opened){
        console.log(`Try Connection again, current status -> ${database.opened}.`);
        database._connect()
    }
}, 3000);

 //connect mongo db.
});


