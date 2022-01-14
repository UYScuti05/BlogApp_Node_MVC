
// getting modules for the project
const express = require('express');
const dotenv = require('dotenv');
const path = require("path");
const bodyparser = require("body-parser");
const morgan = require('morgan');
const connectDB = require('./server/database/connection');

const app = express();

// checking availabilty of PORT
dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 6000

// To Log Request on console
app.use(morgan('tiny'));

// databse connection
connectDB();

// parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

// setting view engine for project
app.set("view engine","ejs")

// loading css and js files path
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

// routing file path
app.use('/',require('./server/routes/router'))

// listening to port
app.listen(PORT,()=>{
    console.log(`Server is active! click here: http://localhost:${PORT}`)
});