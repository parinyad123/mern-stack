const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');


// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const app = express();
app.get('/',(req,res) => res.send('Hellow World--'));

// Use Routes
app.use('/api/users',users);
app.use('/api/profile',profile);
app.use('/api/posts',posts);

const port = process.env.POST || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));

// ''
// ""
// ``

// "asdasdsad'asdasd'" => asdasdsad'asdasd'
// 'sdfsdf"fsdfsdf"' => sdfsdf"fsdfsdf" 

// 'asdaasd'+'asdasdas'
// `sadasdasd"" '' ${port}`