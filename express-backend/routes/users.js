const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const User = require('../models/user');

//Register
router.post('/register', (req, res, next) => {
	let newUser = new User({
		name: req.body.name,
		email: req.body.email,
		username: req.body.username,
		password: req.body.password,
	});

	User.addUser(newUser, (err, user) => {
		if(err){
			res.json({success: false, msg:'Failed to register user'});
		} else {
			res.json({success: true, msg:'User registered. You can now log in.'});
		}
	});
});

//Authenticate
router.post('/authenticate', (req, res, next) => {
	const username = req.body.username;
	const password = req.body.password;

	User.getUserByUsername(username, (err, user) => {
		if(err) throw err;
		if(!user) {
			return res.json({success: false, msg:'User not found'});
		}

		User.comparePassword(password, user.password, (err, isMatch) => {
			if(err) throw err;
			if(isMatch) {
				const token = jwt.sign(user, config.secret, {
					expiresIn: 60*60*24*365 // 1 year
				});

				res.json({
					success: true,
					token: "JWT " + token,
					user: {
						id: user._id,
						name: user.name,
						username: user.username,
						email: user.email,
            trackedItems: user.trackedItems
					}
				})
			} else {
				return res.json({success: false, msg:'Wrong password'});
			}
		});
	});
});

router.post('/track', passport.authenticate('jwt', {session:false}), (req, res, next) => {
	const userId = req.body.userId;
  const asin = req.body.asin;

  User.addToTrackedItems(asin, userId, (err, msg) => {
    if(err) return res.json({success: false, msg: err});
    res.json({success: true, msg: 'Item successfully tracked'});
  });
});

//Profile
router.post('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
	const userId = req.body.userId;

  User.getUserById(userId, (err, user) => {
    if(err) return res.json({success: false, msg: err});
    if(user) return res.json({success: true, user: user});
  });
});

module.exports = router;