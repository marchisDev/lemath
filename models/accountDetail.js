const mongoose = require('mongoose');
const { Schema } = mongoose;

const accountDetailSchema = new mongoose.Schema({
  userID: {
    type: Schema.Types.ObjectId,
    required: [true, 'Username is required'],
    unique: [ true, 'Username already exists'],
  },

  userName: {
    type: String,
    required: [true, 'Username is required'],
  },

  phone:{
    type: String,
  },

  dateBirth:{
    type: Date,
  },

  school:{
    type: String,
  },

  active:{
    type: Boolean
  }
});

const accountDetails = mongoose.model('accountDetails', accountDetailSchema);

module.exports = accountDetails;