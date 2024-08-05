var express = require('express');

var studentController = require('../src/student/studentController');
var bookingController = require('../src/booking/bookingController');

const router = express.Router();

router.route('/student/login').post(studentController.loginUserControllerFn);
router.route('/student/create').post(studentController.createStudentControllerFn);
router.route('/booking/create').post(bookingController.createBookingControllerFn);


module.exports = router;

// // routes/routes.js

// const express = require('express');
// const router = express.Router();
// const Booking = require('../src/booking/bookingController');
// const Student = require('../src/student/studentController');

// router.post('/bookings/create', async (req, res) => {
//   const { firstName, lastName, country, email, phoneNumber, payment } = req.body;

//   // Check if the email exists in the students collection
//   const student = await Student.findOne({ email });

//   if (!student) {
//     return res.status(400).json({ error: 'Student with this email does not exist. Booking failed.' });
//   }

//   // Create a new booking
//   const newBooking = new Booking({
//     firstName,
//     lastName,
//     country,
//     email,
//     phoneNumber,
//     payment
//   });

//   try {
//     const savedBooking = await newBooking.save();
//     res.status(200).json(savedBooking);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to create booking.' });
//   }
// });
// // Login route
// router.post('/student/login', studentController.loginUserControllerFn);
// router.post('/student/register', studentController.createStudentControllerFn);

// module.exports = router;
