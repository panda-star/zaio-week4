const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create Schema & model
const PropertySchema = new Schema({
   title: {
       type: String,
       required: [true, "title is required"]
   },

//    image: {
//        type: Media
//    },

    // estate agent who handles any queries for the house
    agent: {
        // // type might cause issues
        // type: user,
        
        // this is the id of the estate agent from the user collection
        type: String,
        required: [true, "agent is required"]
    },  
    
    // date first posted
    date: {
        type: Date,
        required: [true, "date is required"]
    },  

    // short description of the house
    description: {
        type: String,
        required: [true, "description is required"]
    },  

    price: {
        type: Number,
        required: [true, "price is required"]
    },  

    // is the house still for sale or not
    avaliable: {
       type: Boolean,
       default: true
    },

    address: {
        type: String,
        required: [true, "address is required"]
    }

});

// add in geo location

const Property = mongoose.model("property", PropertySchema);

module.exports = Property;