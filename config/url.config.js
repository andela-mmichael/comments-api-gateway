module.exports = {
  development: {
    user_url:{
      signup: 'http://localhost:8200/user/signup',
      login: 'http://localhost:8200/user/login',
      auth: 'http://localhost:8200/user/authenticate',
      base: 'http://localhost:8200/user'
    },
    comments_url: 'http://localhost:8100/'
      // get_all: 'http://localhost:8100/',
      // create: 'http://localhost:8100/comments',
      // get_one: 'http://localhost:8100/comments',
      // update: 'http://localhost:8100/comments',
      // remove: 'http://localhost:8100/comments'
    
  }
};