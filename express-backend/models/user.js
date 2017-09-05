const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const UserSchema = mongoose.Schema({
	name: {
		type: String
	},
	email: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
  trackedItems: {
    type: Array,
    required: false
  }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback) {
	User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback) {
	const query = {username: username};
	User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(newUser.password, salt, (err, hash) => {
			if(err) throw err;
			newUser.password = hash;
			newUser.save(callback);
		});
	});
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
	bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
		if(err) throw err;
		callback(null, isMatch);
	});
}

module.exports.addToTrackedItems = function(asin, userId, callback) {
  this.getUserById(userId, (err, user) => {
    if(err) throw err;
    let trackedItems = user.trackedItems || [];
    if(trackedItems.indexOf(asin) == -1) {
      trackedItems.push(asin);
      user.trackedItems = trackedItems;
      user.save(callback());
    } else {
      callback('Item is already tracked.')
    }
  });
}

module.exports.removeTrackedItem = function(asin, userId, callback) {
  this.getUserById(userId, (err, user) => {
    if(err) throw err;
    let trackedItems = user.trackedItems || [];
    var index = trackedItems.indexOf(asin);
    if (index > -1) {
      trackedItems.splice(index, 1);
    }
    user.trackedItems = trackedItems;
    user.save(callback);
  });
}
