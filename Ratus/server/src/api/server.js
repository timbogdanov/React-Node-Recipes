const express = require('express');
const cors = require('cors');
const app = express();

const rescricted = require('./auth/restricted');

const recipesRouter = require('../api/recipes/recipes-router');
const authRouter = require('../api/auth/auth-router');

app.use(cors());
app.use(express.json());
app.use('/api/recipes/', rescricted, recipesRouter);
app.use('/api/auth/', authRouter);

module.exports = app;
