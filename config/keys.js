// module.exports = {
//   googleClientID: '844862502347-d72f5g3153q341a440e32sh72favmb6u.apps.googleusercontent.com',
//   googleClientSecret: 'vTNZW9cO9xRjpBUZFOlBJfpT',
//   mongoURI: 'mongodb://louis:password123@ds041337.mlab.com:41337/emaily-dev',
//   cookieKey: 'asdfjkl;asdfjkl;asdfjkl;'
// };
// key.js - figure out what set of credentials to return

if (process.env.NODE_ENV === 'production') {
  // we are in production - return the prod set of keys
  module.exports = require('./prod');
} else {
  // we are in development - return the dev keys!!!
  module.exports = require('./dev');
}
