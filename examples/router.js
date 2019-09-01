const express = require('express');
const router = express.Router();

router.get('/simple/get', (req, res) => {
  res.json({
    msg: 'Hello World'
  });
});

module.exports = router;