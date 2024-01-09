const mongoose = require('mongoose');

const mongo_url = "mongodb://localhost:27017/";
const db_name = 'business_cards';
try {
  mongoose.connect(mongo_url + db_name);
}
catch {
  console.log('Error in connecting the db');
}

// making mongoose schema
const userSchema = mongoose.Schema({
  name: String,
  description: String,
  interests: Array,
  linkedin: String,
  twitter: String
});

// making model from the schema to create document
const User = mongoose.model('user', userSchema);

module.exports = { User };
