const express = require('express');
const router = express.Router();
const {
  signup,
  signin,
  signout,
  profile,
  whoami,
} = require('../controllers/authController');

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/signout', signout);
router.get('/profile', profile)
router.get('/whoami', whoami);

module.exports = router;
