const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create Schema & model
const UserSchema = new Schema({
    userType: {
        type: String,
        required: [true, "user type is required"]
    },

    email: {
        type: String,
        required: [true, "email is required"]
    },

    firstName: {
        type: String,
        required: [true, "user type is required"]
    },

    surname: {
        type: String,
        required: [true, "user type is required"]
    },

    password: {
        type: String,
        required: [true, "user type is required"]
    }
});

const User = mongoose.model("user", UserSchema);

module.exports = User;