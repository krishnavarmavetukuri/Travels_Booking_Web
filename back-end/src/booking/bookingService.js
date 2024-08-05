
var bookingModel = require('./bookingModel'); // Assuming bookingModel.js is in the models directory
var studentModel = require('../student/studentModel'); // Assuming studentModel.js is in the models directory

// Function to create a booking
module.exports.createBookingDBService = (bookingDetails) => {
    return new Promise(function(resolve, reject) {
        // First, check if the email exists in the student table
        // console.log("Booking Details:", bookingDetails);
        studentModel.findOne({ email: bookingDetails.email }, function(err, student) {
            if (err) {
                reject({ status: false, msg: "Error finding student" });
            } else if (!student) {
                reject({ status: false, msg: "Student not found with provided email" });
            } else {
                // Email exists, proceed to create booking
                //console.log("Exists Booking Details:", bookingDetails);
                var newBooking = new bookingModel({
                    firstName: bookingDetails.firstName,
                    lastName: bookingDetails.lastName,
                    email: bookingDetails.email,
                    phoneNumber: bookingDetails.phoneNumber,
                    country: bookingDetails.country,
                    payment: bookingDetails.payment
                });

                console.log("before saving Booking Details:", newBooking);
                newBooking.save(function(err, result) {
                    if (err) {
                        console.log("not saving Booking Details:", newBooking);
                        reject({ status: false, msg: "Error creating booking" });
                    } else {
                        console.log("after saving Booking Details:", newBooking);
                        resolve({ status: true, msg: "Booking created successfully" });
                    }
                });
            }
        });
    });
};
