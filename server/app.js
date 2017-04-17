// server/app.js
const express = require('express');
const path = require('path');
const app = express();

//
// Required for POST Requests
//
//
app.set('port', (process.env.PORT || 3000));
app.use(express.static(path.resolve(__dirname, '..', 'build')));
//
// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});
app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
// module.exports = app;