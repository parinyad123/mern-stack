const express = require('express');

const app = express();
app.get('/',(req,res) => res.send('Hellow World--'));
const port = process.env.POST || 5000;
app.listen(port, () => console.log('Server running on port ${port}'));
