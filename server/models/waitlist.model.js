const mongoose = require("mongoose")

const WaitListSchema = ({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minLength: [2, 'Name must be at least 2 characters'],
    },
    party: {
        type: String,
        required: [true, 'Number of party is required'],
        minLength: [1, 'Party size must be at least 1'],
    },
    time: {
        type: String,
        required: [ true, 'Time input is required'],
        minLength: [1, 'Party size must be at least 1'],
    }
});
module.exports = mongoose.model("Waitlist", WaitListSchema)