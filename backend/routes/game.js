var express = require('express');
var router = express.Router();

// ====================================================== //
/* ==================== GET Game Page =================== */
// ====================================================== //
router.get('/', function(req, res, next) {
  res.send('game here');
});

module.exports = router;
