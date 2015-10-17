Template.userUpload.events({
	'change .fileInput': function(event, template) {
		var files = event.target.files;
		for(var i = 0; i < files.length;i++){
			Images.insert(files[i]);
		}
	}
});

Template.imageView.helpers({
	images: function() {
		return Images.find();
	}
});