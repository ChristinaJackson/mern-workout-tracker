const express = require('express');
const cors = require('cors');
//helps to connect to mongoDB
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//middleware 
app.use(cors());
//allow parsing of json
app.use(express.json());

const uri = process.env.ATLAS_URI;
//
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
//once the connection is open - logs the statement
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

// const exercisesRouter = require('./routes/exercises');
// const usersRouter = require('./routes/users');

// app.use('/exercises', exercisesRouter);
// app.use('/users', usersRouter);

//starts the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});