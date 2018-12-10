const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/Users');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

// app.get('/', (req, res) => {
//   res.send({ bye: 'buddy'});
// });

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
