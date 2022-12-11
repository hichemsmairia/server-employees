const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  cin: {
    type: Number,
    required: true,
  },
  tel: {
    type: Number,
    required: false,
    default: 1111,
  },
});

module.exports = mongoose.model("Employee", employeeSchema);
