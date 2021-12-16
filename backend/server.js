const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config(); // this line configures so we can have our environment variables in the .env file

const app = express();  // app & port will create the express server 
const port = process.env.PORT || 5000; // the port where the server will be on

app.use(cors());    // this is the cors middleware
app.use(express.json());    // this is going to allow us to parse json

// This is where we connect to the database on MongoDB Atlas
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

/*  #####  This is the route middleware which actually requires the route 
files and use them to route whenever user goes to that file  #####    */
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});