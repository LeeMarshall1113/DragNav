const mongoose = require('mongoose');

const dragonSchema = new mongoose.Schema({
   name: String,
   appearance: String,
   diet: String, 
   preferredClimate: String, 
   topSpeed: Number, 
   avgSpeed: Number, 

   // ... other attributes
});

module.exports = mongoose.model('Dragon', dragonSchema);
