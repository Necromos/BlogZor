Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound'
});

Router.map(function () {
  
  this.route('home', {
    path: '/'
  });
  
  this.route('articles', {
    path: '/articles',
    
    waitOn: function(){
      return Meteor.subscribe('allArticles');
    }
  });
  
  this.route('articleShow', {
    path: '/articles/:_id',
    
    waitOn: function(){
      return Meteor.subscribe('showArticle', this.params._id);
    },
    
    action: function(){
      if (this.params._id == "new")
        this.render('articleCreate');
      else
        this.render();
    }
  });
  
});
