Template.home.events({
  'click #register': function(event, template) {
    event.preventDefault();  
    Router.go('/register');
  }
});