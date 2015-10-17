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
      
      	  	//Stores data from input into local storage
	if(typeof(Storage) !== "undefined"){
		if(document.getElementById("fullname").value && document.getElementById("zip").value && document.getElementById("reason").value){
			localStorage.setItem("fullname", document.getElementById("fullname").value);
			localStorage.setItem("zip", document.getElementById("zip").value);
			localStorage.setItem("message", document.getElementById("message").value);
			if(document.getElementById("vol").checked){
				localStorage.setItem("vol", "yes");
			}
			else{
				localStorage.setItem("vol", "no");
			}
			
		//Ajax call to php server
		$.ajax({
			type: "POST",
			url: "http://localhost:3000/",
			data: { name: localStorage.fullname, age: localStorage.zip, message: localStorage.message, vol: localStorage.vol },
			success: function(data) {
				alert('data sent');
			},
			error: function(response, text, err){
				alert('data not sent');
			}
		});
		}
		else{
			alert("You have left a field out. Please try again");
		}
	}
	else{
		alert("Sorry, there is no web storage support :(");
	}

    }
  });

  

}
