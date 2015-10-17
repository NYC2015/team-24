Template.register.helpers({
  sigs:function() {
    //return Signatures.find({}, {sort: {createdAt: -1}});
      return Signatures.find();
  }
});

Template.register.events({
  "submit .submission": function (event) {
    event.preventDefault();

    var fullname = event.target.fullname.value;
    var zip = event.target.zip.value;
    var volunteer = event.target.vol.checked;
    var message = event.target.message.value;
    Session.set("msg", message);

    Signatures.insert({
      fullname: fullname,
      zip: zip,
      volunteer: volunteer,
      message: message,
      createdAt: new Date()
    });
    Router.go('/share');
  },
});