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
  if (Session.get("timeline")) {
    // If hide completed is checked, filter tasks
    return Signatures.find({volunteer: true});
  } else {
    // Otherwise, return all of the tasks
    return Signatures.find();
  }

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

  },
});