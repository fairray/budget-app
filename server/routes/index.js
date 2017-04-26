var express = require('express');
var router = express.Router();
var path = require('path');
var rootPath = path.normalize(__dirname + '/../');
let frontPath = path.normalize(__dirname + '/../../');

/* GET home page. */
router.get('*', function(req, res) {
  res.sendFile(frontPath + 'frontend/build/index.html');
});

module.exports = router;
