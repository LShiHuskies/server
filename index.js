const express = require('express');
require('./services/passport');

const app = express();

// app.get('/', (req, res) => {
//   res.send({ bye: 'buddy'});
// });

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
