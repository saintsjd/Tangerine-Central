var AssessmentMetaForm = Backbone.View.extend({

  template: loadTemplate("AssessmentMetaForm.template.html"),

  initialize: function(){
	this.model.bind("change", this.render, this );
  },
  
  events : {
  	"click #save-assessment-meta-button" : "save",
  },
  
  save : function() {
  	//validate the form
  	var nameField = this.$("input#name")
	var errorBar = this.$(".error-bar");

  	nameField.parent().removeClass("error");
	errorBar.hide();

  	var name = this.$("input#name").val();
  	var language = this.$("#language").val();
  	
  	if( !name ) {
  		this.$("input#name").parent().addClass("error");
  		errorBar.html("Name field is required");
  		errorBar.fadeIn("slow");
  		return false;
  	}  	
  	
  	var now  = new Date();
  	if( this.model.isNew() ) {
  		this.model.set({ created: now }, {silent:true} );
  	}
  	//save the assessment
  	this.model.save({ name: name, language: language, updated: now }, {success: function(m){
		window.assessments.add(m);  	
  	}});
  	
  },

  render: function() {
    $(this.el).html( this.template(this.model.toJSON()) ).trigger( "create" );
    return this;
  }

});
