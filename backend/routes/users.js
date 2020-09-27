const router = require('express').Router();
//require the mongoose model
let User = require('../models/user.model');


router.route('/').get((req, res) => {
    //mongoose method that gets the list of users from the mongoDB database
    //returns a promise
    User.find()
        //get users in json format
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

//
router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({ username });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//todo - add update username function
//todo - add delete user function 

module.exports = router;