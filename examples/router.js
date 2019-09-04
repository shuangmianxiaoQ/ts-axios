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

router.post('/base/post', (req, res) => {
  res.json(req.body);
});

router.post('/base/buffer', (req, res) => {
  const msg = [];

  req.on('data', chunk => {
    if (chunk) {
      msg.push(chunk);
    }
  });

  req.on('end', () => {
    const buffer = Buffer.concat(msg);

    res.json(buffer.toJSON());
  });
});

module.exports = router;
