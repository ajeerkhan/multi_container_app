const User = require("../models/User")

var appRouter = function(app) { 

    app.get('/', (req, res) => {
        res.send('Hello world\n');
      });
      
    app.post("/save", function(req,res){
    const reqData = req.body;    
    const person = new User();
    person.email = reqData.email;
    person.save().then(doc => {
        console.log(doc)
        res.send(doc);
      }).catch(err => {
        console.error(err)
        res.status(400).send(err);
      })
    });

    app.get("/all", function(req,res){
        User.find({}).then(doc => {
            console.log(doc)
            res.send(doc);
          }).catch(err => {
            console.error(err)
            res.status(400).send(err);
          })
        });

}

module.exports = appRouter