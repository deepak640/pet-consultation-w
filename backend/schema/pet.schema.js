const mongoose = require("mongoose");
const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    line1: {
      type: String,
    },
    line2: {
      type: String,
    },
    state: {
      type: String,
    },
    pincode: {
      type: Number,
      requried: true,
    },
    country: {
      type: String,
      default: "India",
      enum: ["India", "Bangladesh", "Nepal", "Sri-Lanka"],
    },
  },
  contact_Number: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  // pet information is filled at there
  pet_type: {
    type: String,
    enum: ["Dog", "Cat", "Cattle"],
    default: "Dog",
  },
  breed: {
    type: String,
  },
  pet_name: {
    type: String,
  },
  age: {
    // in year
    type: Number,
  },
  past_disease: {
    //if any
    type: String,
    default: "none",
  },
});
const Pet = mongoose.model("Pet", petSchema);
module.exports = Pet;
