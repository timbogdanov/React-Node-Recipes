const router = require('express').Router();

const Recipes = require('./recipes-model');

router.post('/', (req, res) => {
  const id = req.decodedToken.subject;
  const {
    name,
    source,
    cook_time,
    level_of_difficulty,
    serving_size,
    user_id,
  } = req.body;

  Recipes.create({
    name,
    source,
    cook_time,
    level_of_difficulty,
    serving_size,
    user_id: id,
  }).then((recipe) => {
    res.status(201).json(recipe);
  });
});

router.get('/', (req, res) => {
  const id = req.decodedToken.subject;

  Recipes.findBy(id).then((recipes) => {
    res.status(200).json(recipes);
  });
});

module.exports = router;
