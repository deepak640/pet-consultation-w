const mongoose = require("mongoose");
const doctorSchema = new mongoose.Schema({
  prefix: {
    //use for mr/mrs
    type: String,
    enum: ["Mr", "Mrs"],
  },
  name: {
    first_name: {
      type: String,
    },
    middle_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
  },
  degree: {
    type: String,
  },
  expertise: {
    type: String,
  },
  experience: {
    type: String,
  },
  license: {
    type: String,
  },
  address: {
    type: String,
  },
  contact: {
    type: Number,
  },
  star: {
    type: Number,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
});

const Doctor = mongoose.model("Doctor", doctorSchema);
module.exports = Doctor;
