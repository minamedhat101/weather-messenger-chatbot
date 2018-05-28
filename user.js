const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fb_id: {
    type: String,
    required: true
  },
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  locale: {
    type: String,
  },
  gender: {
    type: String,
  },
  timezone: {
    type: String,
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;