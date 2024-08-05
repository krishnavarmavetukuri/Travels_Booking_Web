
var bookingService = require('./bookingService');


// Controller function to handle booking creation
var createBookingControllerFn = async (req, res) => {
  try {
      var status = await bookingService.createBookingDBService(req.body);
      console.log(status);
      if (status) {
          res.send({ "status": true, "message": "Booking created successfully" });
      } else {
          res.send({ "status": false, "message":  "Error creating booking" });
      }
  } catch (err) {
      console.log(err);
   }
};

module.exports = { createBookingControllerFn };