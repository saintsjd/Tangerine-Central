var SchoolPageEditView = Backbone.View.extend({
  el: $("body"),
  template: loadTemplate("SchoolPageEdit.template.html"),
  initialize: function (){
    this.model.view = this;
  },
  events: {
    "click button:contains('Save')" : "save",
  },
  save: function() {
  	var schools = [];
  	
  	//for each line in the text area (these are schools)
  	// map the name,district,schoolId,province row to a javascript obejct
  	$.each( this.$("textarea").val().split("\n"), function( index, schoolLine ) { 
  		var school = {};
  		var row = schoolLine.split(",");
  		school.name = row[0];
  		school.district = row[1];
  		school.schoolId = row[2];
  		school.province = row[3];
  		if( school.name != "" )
	  		schools.push( school );
  	});
   this.model.set({"schools": schools }).save();
  },
  render: function(){
    $(this.el).html(this.template(this.model.toJSON()));
    return this;
  }
});
