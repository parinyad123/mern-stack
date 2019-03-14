const express = require('express');

const mongoose = require('mongoose');

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const app = express();
app.get('/',(req,res) => res.send('Hellow World--'));
const port = process.env.POST || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));

// ''
// ""
// ``

// "asdasdsad'asdasd'" => asdasdsad'asdasd'
// 'sdfsdf"fsdfsdf"' => sdfsdf"fsdfsdf" 

// 'asdaasd'+'asdasdas'
// `sadasdasd"" '' ${port}`