var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
  id: {
    type: Number,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  mobile_number: {
    type: Number,
    required: true,
    default: 1234567890
  },
  description: {
    type: String,
   // required: true
  },
  quantity: {
    type: Number,
  //  required: true,
    default: 1
  }
}, { collection: 'dataItems' });

module.exports = mongoose.model('Item', itemSchema);
