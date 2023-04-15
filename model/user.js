const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
},
    { collection: "users" }//dont want collection to be dynamic on model
);

const model = mongoose.model("UserSchema", UserSchema);

module.exports = model; 

/*
this schema allows the application to create, fetch and delete a new user in the database
without having to write these what would be functions out manually, saving lots of time


*/