Signatures = new Mongo.Collection("subscribers");

if(Meteor.isClient) {

  Template.body.helpers({
    sigs:function() {
      return Signatures.find({}, {sort: {createdAt: -1}});
    }
  });

  Template.body.events({
    "submit .submission": function (event) {
      event.preventDefault();

      var fullname = event.target.fullname.value;
      var zip = event.target.zip.value;
      //var volunteer = event.target.vol.value;

      Signatures.insert({
        fullname: fullname,
        zip: zip,
        //volunteer: vol,
        createdAt: new Date()
      });

    }
  });

  

}
