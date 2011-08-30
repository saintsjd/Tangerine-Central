var Debug = Backbone.View.extend({

  initialize: function(){
	this.model.bind("change", this.render, this );
  },
  
  render: function() {
    this.$("#debug-assessment-id").html( this.model.id );
    this.$("#debug-assessment-rev").html( this.model.get("_rev") );
    this.$("#debug-assessment-name").html( this.model.get("name") );
    return this;
  }

});
