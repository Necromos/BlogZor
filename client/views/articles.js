Meteor.subscribe('allArticles');

Template.articles.articles = function(){
  var articles = Articles.find({}).fetch();
  return articles;
}