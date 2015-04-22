var Controller = require('../controllers/gateway.controller');
var express = require('express');
var Router = express.router();

Router
  .post('/signup', Controller.signUp)

  .post('/login', Controller.login)

  .get('/:users/comments')

  .post('/:users/comments')

  .get('/:users/comments/:name')

  .put('/:users/comments/:name')

  .delete('/:users/comments/:name');