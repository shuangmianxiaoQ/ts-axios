const express = require('express');
const router = express.Router();

router.get('/simple/get', (req, res) => {
  res.json({
    msg: 'Hello World'
  });
});

router.get('/base/get', (req, res) => {
  res.json(req.query);
});

module.exports = router;
