Template.share.events({
  "submit .submission": function (event) {
    event.preventDefault();
    var message = event.target.message.value;

    Signatures.insert({
      fullname: fullname,
      zip: zip,
      volunteer: volunteer,
      message: message,
      createdAt: new Date()
    });
  },
});