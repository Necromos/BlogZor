Template.articles.articles = function(){
  var articles = Articles.find({}, {sort: {name: 1}}).fetch();
  return articles;
};

Template.articles.events({
  'click div.article-name': function(event, template){
    Router.go('/articles/'+this._id);
  },
  'click button.article-remove': function(event, template){
    Articles.remove({_id: this._id});
  },
  'click button.article-new': function(event, template){
    Router.go('/articles/new');
  }
});

Template.articleCreate.events({
  'click input#article-submit': function (event, template){
    var name = template.find('#article-name').value;
    var content = template.find('#article-content').value;
    Articles.insert({name: name, content: content});
    Router.go('/articles');
  }
});

Template.articleShow.article = function(){
  var article = Articles.findOne({});
  return article;
};