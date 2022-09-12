//Install express server
const express = require('express');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/web-client'));

app.get('/*', (_req, _res) =>
  _res.sendFile('index.html', {root: 'dist/web-client/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
