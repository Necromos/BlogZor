if(Meteor.isClient) {
  UI.registerHelper("setTitle", function(title) {
    if(typeof title === "string") {
      document.title = title;  
    }
    else {
      document.title = "BlogZor"; 
    }
  });
}