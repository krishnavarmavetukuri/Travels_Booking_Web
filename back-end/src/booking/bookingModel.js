var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var bookingSchema = new Schema({

    firstName: { 
        type: String, 
        required: true 
    },
    lastName: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true 
    },
    phoneNumber: { 
        type: String 
    },
    country: { 
        type: String,
        required: true
    },
    payment: { 
        type: Number 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});
module.exports = mongoose.model('booking', bookingSchema);