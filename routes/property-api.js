const express = require('express');
const router = express.Router();
const Property = require("../models/property");


// get a list of all properties
router.get("/properties", function(req, res, next){
    Property.find({}).then(function(properties){
        res.send(properties);
    });
});

// get a single property
router.get("/properties/:id", function(req, res, next){
    Property.findOne({_id: req.params.id}).then(function(property){
        res.send(property);
    })
});


// add property to db
router.post("/properties", function(req,res, next){
    Property.create(req.body).then(function(property){
        res.send(property);
    }).catch(next);     
});
  
// update database
router.put("/properties/:id", function(req, res, next){
    Property.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Property.findOne({_id: req.params.id}).then(function(property){
            res.send(property);
        })
    });
});

// delete a property from the database and send it back 
router.delete("/properties/:id", function(req, res, next){
    Property.findByIdAndRemove({_id: req.params.id}).then(function(property){
        res.send(property);
    });
});

module.exports = router;