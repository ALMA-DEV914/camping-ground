const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    parks: {
        types: Schema.Types.ObjectId,
        ref: "Park",
    },
    user: {
        types: Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true})

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;