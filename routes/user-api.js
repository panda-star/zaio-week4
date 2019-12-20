const express = require('express');
const router = express.Router();
const User = require("../models/user");


// get a list of all users
router.get("/users", function(req, res, next){
    User.find({}).then(function(users
        ){
        res.send(users
            );
    });
});

// get a single user
router.get("/users/:id", function(req, res, next){
    User.findOne({_id: req.params.id}).then(function(user){
        res.send(user);
    })
});


// add user to db
router.post("/users", function(req,res, next){
    User.create(req.body).then(function(user){
        res.send(user);
    }).catch(next);     
});
  
// update database
router.put("/users/:id", function(req, res, next){
    User.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        User.findOne({_id: req.params.id}).then(function(user){
            res.send(user);
        })
    });
});

// delete a user from the database and send it back 
router.delete("/users/:id", function(req, res, next){
    User.findByIdAndRemove({_id: req.params.id}).then(function(user){
        res.send(user);
    });
});

module.exports = router;