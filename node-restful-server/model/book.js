const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    writer: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required:false
    }
}, 
{
    writeConcern: {
      w: 'majority',
      j: true,
      wtimeout: 1000
    }
  });

module.exports = mongoose.model('Books', bookSchema);