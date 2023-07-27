const mongoose  = require("mongoose");
const empSchema = new mongoose.Schema({
  empjudul: {
    type: String,
    required: true,
  },
  emplink: {
    type: String,
    required: true,
  },
  empgenre: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Emp", empSchema);
