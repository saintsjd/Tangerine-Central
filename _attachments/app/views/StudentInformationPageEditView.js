var StudentInformationPageEditView = Backbone.View.extend({
  el: $("#edit-pane"),
  template: loadTemplate("StudentInformationPageEdit.template.html"),

  events: {
    "click button:contains('Save')" : "save",
    "click button:contains('Add')" : "add",
  },

  save: function() {
  	var radioButtons = new Array();
 	this.$("ol li").each(function( index, value ){
 		var radioButton = {};
 		radioButton.label = $(value).find('input[name="label"]').val();
		radioButton.options = new Array();
		//TODO add .type and .name
		
		$.each( $(value).find("textarea").val().split("\n"), function( idx, option ) { 
	  		radioButton.options.push(option);
  		});		

		if( radioButton.label != "" )
		radioButtons.push(radioButton);
 	});

	this.model.set({"radioButtons":  radioButtons } ).save();
  },

  add: function() {
 	var template = loadTemplate("NewRadioButtonForm.template.html");
 	this.$("ol").append(template());
  },

  remove: function() {
	console.log(this);
	console.log(typeof(this));
  },

  render: function(){
    $(this.el).html(this.template(this.model.toJSON()));
    return this;
  }
});
