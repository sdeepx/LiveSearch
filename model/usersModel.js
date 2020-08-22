const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {
        type: String,
        reuired: [true, "A user must have a name"]
    },
    address: {
        type: String
    },
    skills: {
        type: Array
    }
});

const users = mongoose.model("USERS", schema);

module.exports = users;