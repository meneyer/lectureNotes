// let express = require('express');
// let router = express.Router();
const router = require('express').Router();

// let sequelize = require('../db')
// let User = sequelize.import('../models.user')
const User = require('../db').import('../models/user')

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//create a new endpoint: /create
//the endpoint is going to be a post request
//have an object that matches the model of the UserTable (email/password)
//let sequelize create a new record in the database (create)

// router.post('/create', function(req, res){
//     let userModel = {
//         email: req.body.user.email,
//         password: req.body.user.password
//     };
//     User.create(userModel).then (
//         // res.send("This is our user/create endpoint")
//         function(user){
//             let responseObject = {
//                 user: user
//             };
//             res.json(responseObject);
//     })
//     .catch(function(err){
//         res.status(500).json({error: err})
//     });
// });

router.post('/create', function(req, res){
    User.create ({
        email: req.body.user.email,
        password: bcrypt.hashSync(req.body.user.password, 13)
    })
    .then (function createSuccess (user){
        let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24}); //24 hours in seconds -- 60 seconds*60 minutes*24 hours
      
        res.json ({
            user: user,
            message: "User successfully created",
            sessionToken: token
        });            
    })
    .catch(function(err){
        res.status(500).json({error: err})
    });
});


//USER SIGNIN

//create a new endpoint - /login
//the endpoint is going to be a post request
//build a query statement (hard code in a user's email that exists in your database)
//use FindOne
//Let sequelize return a success
//if we find one, return user info and, if user doesn't exist, return "user does not exist"

router.post('/login', function (req, res){
    //Project.findOne({ where: {title: 'My Title}})
    User.findOne({ where: { email: req.body.user.email}})
    .then (function loginSuccess(user){
        if(user){
            bcrypt.compare(req.body.user.password, user.password, function (err, matches){
                if(matches){
                    let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24})
                    res.status(200).json({
                        user: user,
                        message: "user successfully logged in",
                        sessionToken: token

                    })
                } else {
                    res.status(502).send({ error: "Login Failed"});
                }
            });
        } else {
            res.status(500).json({error: "User does not exist"})
        }
    })
    .catch(function(err){
        res.status(500).json({error: err})
    });
});

module.exports = router;