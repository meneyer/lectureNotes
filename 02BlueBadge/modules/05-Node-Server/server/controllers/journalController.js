//GET POST PUT DELETE
let express = require('express');
let router = express.Router();


//set up the end point - localhost:3000/practice - it gets the journal part from the app.js page
router.get('/practice', function(req, res){
    res.send("This is a practice route")
});

module.exports = router;