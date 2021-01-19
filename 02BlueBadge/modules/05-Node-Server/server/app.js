require("dotenv").config();
let express = require('express')
let app = express();
const sequelize = require("./db")
let journal = require('./controllers/journalController')
let user = require('./controllers/userController')
let calc = require('./controllers/calculatorController')

sequelize.sync();
//sequelize.sync({force: true})

app.use(require('./middleware/headers'));

app.use(express.json());

// app.use("/test", function(request, response){
//     response.send("This is a message from the test endpoint on the server!");
// })

app.use('/user', user);
app.use('/calculator', calc)

//Have an endpoint of journal/practice
//send a response from that enpoint (This is a practice route)
//it gets the /journal from the endpoint from the line below, then finds the blue journal, which tells it to go to the practice page, making the endpoint /journal/practice
app.use('/journal', journal)

// app.use(require('./middleware/validate-session')); //anything below this will require a token to access, thus becoming proteced (anything above does not require a token and is not protected) -- this is one way, the module said to delete this line and put it in the journal controller file instead


app.listen(3000, function()
    {console.log("App is listenting on port 3000");
});

//localhost:3000

//localhost:3000/test