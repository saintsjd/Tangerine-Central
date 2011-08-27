var AssessmentMetaForm = Backbone.View.extend({

  template: loadTemplate("AssessmentMetaForm.template.html"),

  initialize: function(){
	this.model.bind("change", this.render, this );
  },

  render: function() {
    $(this.el).html( this.template(this.model.toJSON()) ).trigger( "create" );
    return this;
  }

});
