const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);
