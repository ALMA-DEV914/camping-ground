const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const parkSchema = new Schema(
  {
    parkArea: {
      type: String,
      required: true,
      
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },

  },
  {
    toJSON: {
      getters: true
    }
  }
);


const Park = model('Park', parkSchema);

module.exports = Park;
