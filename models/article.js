Articles = new Meteor.Collection('articles');

Articles.allow({
  'insert': function (userId, article){
    return true; //check if user is allowed to make some posts?
  },
  'update': function (userId, article, fields, modifier){
    var allowed = [ "name" ]; //array of allowed fields to change
    return (article.owner === userId) && (_.difference(fields, allowed).length === 0); //global admin/admin can update?
  },
  'remove': function (userId, article){
    return task.owner === userId; //global admin/admin can delete?
  }
});

Meteor.publish("allArticles", function(){
  return Articles.find();
});

Meteor.publish("showArticle", function(articleId){
  return Articles.find({_id: articleId});
});