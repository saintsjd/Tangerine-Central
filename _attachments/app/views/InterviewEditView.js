var InterviewEditView = Backbone.View.extend({
  el: $("#edit-pane"),
  template: loadTemplate("InterviewEdit.template.html"),

  events: {
    "click button:contains('Save')" : "save",
    "click button:contains('Add')" : "add",
  },

  save: function() {
  	var radioButtons = new Array();
 	this.$("ol li").each(function( index, value ){
 		var question = {};
 		question.label = $(value).find('input[name="label"]').val();
		question.options = new Array();
		
		$.each( $(value).find("textarea").val().split("\n"), function( idx, option ) { 
			if( option != "" )
		  		question.options.push(option);
  		});		

		if( question.label != "" )
			radioButtons.push(question);
 	});
	this.model.set({"radioButtons":  radioButtons } ).save();
  },

  add: function() {
 	var template = loadTemplate("NewRadioButtonForm.template.html");
 	this.$("ol").append(template());
  },

  render: function(){
    $(this.el).html(this.template(this.model.toJSON()));
    return this;
  }
});
