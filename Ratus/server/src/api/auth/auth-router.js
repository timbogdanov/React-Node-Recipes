const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/users-model');
const constants = require('../../utils/constants');

router.post('/register', (req, res) => {
  const {
    first_name,
    last_name,
    email,
    password,
    username,
  } = req.body;

  const hash = bcrypt.hashSync(password, 12);

  Users.create({
    first_name,
    last_name,
    email,
    password: hash,
    username,
  })
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((error) => {
      res.status(409).json(error.message);
    });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  Users.findBy({ username })
    .then(([user]) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = signToken(user);

        res.status(200).json({ user, token });
      } else {
        res
          .status(401)
          .json({ message: `username or password incorrect` });
      }
    })
    .catch((error) => {
      res.status(500).json(error.message);
    });
});

function signToken(user) {
  const payload = {
    subject: user.id,
    first_name: user.first_name,
    last_name: user.last_name,
  };

  const options = {
    algorithm: 'HS256',
  };

  return jwt.sign(payload, constants.jwtSecret, options);
}

module.exports = router;
