'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var StudentSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the student'
  },
  Brithday_date: {
    type: Date,
    default: Date.now
  },
  program: {
    type: [{
      type: String,
      enum: ['engineering', 'science', 'law']
    }],
    default: ['computer science']
  }
});

module.exports = mongoose.model('Students', StudentSchema);
