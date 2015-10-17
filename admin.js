if(Meteor.isClient()) {

	Template.body.helpers({
    recent_names:function() {
      return Signatures.find({}, {sort: {createdAt: -1}, limit: 5});
    }
  });

	Template.body.events({
		'click '
	})
}