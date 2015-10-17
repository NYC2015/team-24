local = false;
z = 0;
Template.admin.helpers({
  sigs:function() {
 /* 	if (local == true){
  	  console.log(Signatures.find({volunteer: true}));
      return Signatures.find({volunteer: true});
  	} else if(local == false) {
  		console.log(Signatures.find());
  		return Signatures.find();
  	}*/

if(Session.get("ziparea")){
  if (Session.get("timeline")) {
    // If hide completed is checked, filter tasks
    Session.set("q_count", Signatures.find({volunteer: true, zip: Session.get("ziparea")}).count());
    return Signatures.find({volunteer: true, zip: Session.get("ziparea")});
  } else {
    // Otherwise, return all of the tasks
    Session.set("q_count", Signatures.find({zip: Session.get("ziparea")}).count());
    return Signatures.find({zip: Session.get("ziparea")});
  }
} else {
  Session.set("q_count", Signatures.find().count());
  return Signatures.find();
}
  },
  qcount: function() {
    return Session.get("q_count");
  },

	timeline: function () {
	  return Session.get("timeline");
	}

});

Template.admin.events({
  "submit .query": function (event) {
    event.preventDefault();
/*    z = event.target.zip.value;
    if(event.target.timeline.checked) {
    	local = true;
    } else {
    	local = false;
    }*/
    Session.set("timeline", event.target.timeline.checked);
    Session.set("ziparea", event.target.zip.value);

  },
  "click .delete": function () {
      Signatures.remove(this._id);
  }
});

Template.admin.isUserAdmin = function() {
  var userEmail = Meteor.user().username;
  if(userEmail === "rocktheearth@gmail.com") {
    return true;
  } else {
    return false;
  }
}

Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});