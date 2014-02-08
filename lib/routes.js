Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound'
});

Router.map(function () {
  
  this.route('home', {
    path: '/'
  });
  
  this.route('articles', {
    path: '/articles'
  });
  
  this.route('articleShow', {
    path: '/articles/:_id'
  });
  
});
