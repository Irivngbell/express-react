const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ msg: 'message pris depuis le fichier login' });
});

module.exports = router;
