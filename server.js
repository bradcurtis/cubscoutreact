const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
const router = express.Router();
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));

// send the user to index html page inspite of the url
router.get('/', (req, res) => {
  res.sendfile(path.join(__dirname, 'dist', 'index.html'));
});

app.use('/', router);

app.listen(port);