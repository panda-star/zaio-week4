const express = require('express');  
const bodyParser = require('body-parser');
const mongoose = require("mongoose");


// set up express app
const app = express();

// connect to mongoDB
// mongoose.connect("mongodb://localhost/properties");
mongoose.connect('mongodb://localhost/properties', { useUnifiedTopology: true, useNewUrlParser: true });

// serves static files
app.use(express.static("public"));

app.use(bodyParser.json());

// initialize routes
app.use("/api", require('./routes/api')); 

// error handling middleware
app.use(function(err,req,res,next){
    res.status(422).send({error: err.message});
})


// listen for requests from localhost or from hosting port
app.listen(process.env.port || 3000, function(){
    console.log('now listening for requests');
});