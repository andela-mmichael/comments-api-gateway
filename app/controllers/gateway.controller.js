var express = require('express');
var Router = express.Router();
var request = require('request');
var config = require('../../config/url.config');
var user_url = config[process.env.NODE_ENV].user_url;
var comments_url = config[process.env.NODE_ENV].comments_url;

module.exports = {
  signUp: function(req, res){
    request({
      url: user_url.signup,
      method: 'POST',
      form: req.body
    },
    function(err, httpres, body){
      if(err){
        res.send(err);
      }
      else{
        res.json(JSON.parse(body));
      }
    });
  },

  login: function(req, res){
    request({
      url: user_url.login,
      method: 'POST',
      form: req.body
    },
    function(err, httpres, body){
      if(err){
        res.send(err);
      }
      else{
        res.json(JSON.parse(body));
      }
    });
  },

  // getUser: function(req, res){
  //   // request({
  //   //   url: user_url.auth,
  //   //   method: 'POST',
  //   //   headers: {'authorization': req.headers.authorization}
  //   // }, function(err, httpres, body){
  //   //   if(err){
  //   //     res.send(err);
  //   //   }
  //     request({
  //       url: user_url.base + body.username,
  //       method: 'GET'
  //     },
  //     function(err, httpres, body){
  //       if(err){
  //         res.send(err);
  //       }
  //       else{
  //         res.json(JSON.parse(body));
  //       }
  //     });
  //   // });
  // },

  getAllComments: function(req, res){
    // request({
    //   url: user_url.auth,
    //   method: 'POST'
    // }, function(err, httpres, body){
    //   if(err){
    //     res.send(err);
    //   }
      request({
        url: comments_url + 'comments', 
        method: 'GET',
        form: req.body
      },
      function(err, httpres, body){
        if(err){
          res.send(err);
        }
        else{
          res.json(JSON.parse(body));
        }
      });
    // });
  },

  createComment: function(req, res){
    request({
      url: comments_url + 'comments',
      method: 'POST',
      form: req.body
    },
    function(err, httpres, body){
      if(err){
        res.send(err);
      }
      else{
        res.json(JSON.parse(body));
      }
    });
  },

  getUserComment: function(req, res){
    request({
      url: comments_url + 'comments/' + req.params.name, 
      method: 'GET',
      form: req.body
    },
    function(err, httpres, body){
      if(err){
        res.send(err);
      }
      else{
        res.json(JSON.parse(body));
      }
    });
  },

  updateUserComment: function(req, res){
    request({
      url: comments_url + 'comments/',  
      method: 'PUT',
      form: req.body
    },
    function(err, httpres, body){
      if(err){
        res.send(err);
      }
      else{
        res.json(JSON.parse(body));
      }
    });
  },

  deleteUserComment: function(req, res){
    request({
      url: comments_url + 'comments/' + req.params.name,  
      method: 'DELETE',
      form: req.body
    },
    function(err, httpres, body){
      if(err){
        res.send(err);
      }
      else{
        res.json(JSON.parse(body));
      }
    });
  }


};
