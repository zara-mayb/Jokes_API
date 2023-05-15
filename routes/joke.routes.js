const JokeController = require('../controllers/jokes.controller');

module.exports = app => {
  app.get('/api/jokes', JokeController.findAllJokes);
  app.get('/api/jokes/:id', JokeController.findOneSingleJoke);
  app.patch('/api/jokes/:id', JokeController.updateExistingJoke);
  app.post('/api/jokes', JokeController.createNewJoke);
  app.delete('/api/jokes/:id', JokeController.deleteAnExistingJoke);
}